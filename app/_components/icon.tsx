import React from 'react';

interface IconItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
}

const Icon: React.FC<IconItemProps> = ({ icon: IconComponent, label, href }) => {
  return (
    <a href={href} className="flex flex-col justify-center items-center p-2 rounded-full w-full sm:rounded-xl bg-slate-200 cursor-pointer gap-1 md:w-24">
      <IconComponent size={24} />
      <span className="md:block hidden">{label}</span>
    </a>
  );
};

export default Icon;