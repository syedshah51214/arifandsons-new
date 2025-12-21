import React, { useEffect } from 'react';

// Minimal, safe Helmet/HelmetProvider fallback used when `react-helmet-async` isn't installed.
// It supports basic <title>, <meta name="...">, <link rel="...">, and <script type="..."> children.

export const HelmetProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export const Helmet: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const added: Array<Element | { type: 'title'; prev: string }> = [];

    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) return;
      const type = child.type as any;

      // Only handle string element types (title, meta, link, script)
      if (typeof type !== 'string') return;

      if (type === 'title') {
        const prev = document.title;
        const titleContent = String(child.props.children || '');
        document.title = titleContent;
        added.push({ type: 'title', prev });
      }

      if (type === 'meta') {
        const el = document.createElement('meta');
        if (child.props.name) el.setAttribute('name', child.props.name);
        if (child.props.content) el.setAttribute('content', child.props.content);
        if (child.props['data-react-helmet']) el.setAttribute('data-react-helmet', String(child.props['data-react-helmet']));
        document.head.appendChild(el);
        added.push(el);
      }

      if (type === 'link') {
        const el = document.createElement('link');
        if (child.props.rel) el.setAttribute('rel', child.props.rel);
        if (child.props.href) el.setAttribute('href', child.props.href);
        document.head.appendChild(el);
        added.push(el);
      }

      if (type === 'script') {
        const el = document.createElement('script');
        if (child.props.type) el.type = child.props.type;
        if (child.props.src) el.src = child.props.src;
        el.text = typeof child.props.children === 'string' ? child.props.children : '';
        document.head.appendChild(el);
        added.push(el);
      }
    });

    return () => {
      // cleanup
      for (const a of added) {
        if ((a as any).type === 'title') {
          document.title = (a as any).prev || '';
        } else if (a instanceof Element) {
          a.remove();
        }
      }
    };
  }, [children]);

  return null;
};
