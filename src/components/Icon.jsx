import React from 'react';

const Icon = ({ icon: IconComponent, size = 24, color = 'currentColor', link = null, text}) => {
  const iconElement = <IconComponent size={size} color={color} />;

  if (link) {
    return (
      <a href={link} className="inline-flex items-center  hover:text-red">
        {iconElement}
        {text && <span className="ml-2">{text}</span>}
      </a>
    );
  }

  return (
    <span className="inline-flex items-center  hover:text-red">
      {iconElement}
      {text && <span className="ml-2">{text}</span>}
    </span>
  );
}

export default Icon;