import React from 'react';
import cn from 'classnames';

type Prop = {
    className?: string;
    children: React.ReactNode,
    type: string
}

const Button = ({ className, children, type }: Prop) => {
  return (
    <button type={type} className={cn("border-blue-600 border-2 rounded-md py-1 flex items-center justify-center", className)}>
      {children}
    </button>
  );
}

export default Button;
