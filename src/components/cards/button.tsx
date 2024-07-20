import React from 'react';
import cn from 'classnames';

type Prop = {
    className?: string;
    children: React.ReactNode
}

const Button = ({ className, children }: Prop) => {
  return (
    <div className={cn("border-blue-600 border-2 rounded-md py-1 flex items-center justify-center", className)}>
      {children}
    </div>
  );
}

export default Button;
