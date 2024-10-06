import React, { useState } from 'react';

interface IconProps {
  image: string;
  label: string;
  onClick: () => void;
}

const Icon: React.FC<IconProps> = ({ image, label, onClick }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <div className="icon" onClick={() => setIsHighlighted(!isHighlighted)} onDoubleClick={onClick}>
      <img src={image} alt={label} />
      <p className={isHighlighted ? 'highlight' : ''}>{label}</p>
    </div>
  );
};

export default Icon;