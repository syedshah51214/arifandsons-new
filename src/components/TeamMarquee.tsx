import teamMembers from './teamData';

export default function TeamMarquee(): JSX.Element {
  // duplicate items for infinite effect
  const list: import('./teamData').TeamMember[] = teamMembers.concat(teamMembers);

  return (
    <div className="overflow-hidden">
      <div className="relative">
        <div className="marquee flex items-center gap-8 whitespace-nowrap py-6">
          {list.map((member: import('./teamData').TeamMember, idx: number) => (
            <div key={`t-${idx}`} className="inline-flex flex-col items-center justify-center w-56 p-4 bg-gray-800/50 rounded-xl border border-amber-500/10">
              <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-3" />
              <h4 className="text-white font-semibold">{member.name}</h4>
              <p className="text-sm text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
