import React from 'react';

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '245', label: 'Projects Completed' },
  { value: '60+', label: 'Happy Clients' },
  { value: '32K', label: 'Lines of Code' },
];

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-white/10 p-4 rounded-lg text-center">
    <p className="text-3xl font-bold">{value}</p>
    <p className="text-sm text-gray-300">{label}</p>
  </div>
);

const Stats = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
      {stats.map((stat) => (
        <StatItem key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
};

export default Stats;