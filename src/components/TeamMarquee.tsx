import teamMembers from './teamData';

export default function TeamMarquee(): JSX.Element {
  // duplicate items for infinite effect
  const list: import('./teamData').TeamMember[] = teamMembers.concat(teamMembers);

  return (
    <div className="overflow-hidden">
      <div className="relative">
        <div className="marquee py-6">
          <div className="marquee-track flex items-center gap-8">
            {list.map((member: import('./teamData').TeamMember, idx: number) => (
              <div key={`t-${idx}`} className="inline-flex flex-col items-center justify-center w-72 p-6 bg-gray-800/50 rounded-xl border border-amber-500/10">
                <img src={member.image} alt={member.name} className="w-40 h-28 rounded-full object-cover mb-4" />
                <h4 className="text-white font-semibold text-lg">{member.name}</h4>
                <p className="text-sm text-gray-300">{member.role}</p>
              </div>
            ))}
            {list.map((member: import('./teamData').TeamMember, idx: number) => (
              <div key={`t-dup-${idx}`} className="inline-flex flex-col items-center justify-center w-72 p-6 bg-gray-800/50 rounded-xl border border-amber-500/10">
                <img src={member.image} alt={member.name} className="w-40 h-28 rounded-full object-cover mb-4" />
                <h4 className="text-white font-semibold">{member.name}</h4>
                <p className="text-sm text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
