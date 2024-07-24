import React from 'react';

interface IconItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
}

const Icon: React.FC<IconItemProps> = ({ icon: IconComponent, label, href }) => {
  return (
    <div className="flex flex-col justify-center items-center p-2 rounded-full w-full sm:rounded-xl sm:text-gray-600 text-slate-200 hover:rounded-full hover:bg-white hover:text-gray-600 cursor-pointer gap-1 md:w-24">
      <IconComponent size={24} />
      <span className="md:block hidden">{label}</span>
    </div>
  );
};

export default Icon;