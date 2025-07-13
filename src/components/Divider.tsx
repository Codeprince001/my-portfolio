import React from 'react';

interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className = '' }) => {
  return (
    <div className={`w-[80%] border-t border-white/20 border-[0.5px] ${className}`} />
  );
};

export default Divider;
