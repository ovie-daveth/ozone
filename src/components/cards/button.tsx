import React from 'react';
import cn from 'classnames';

type ButtonType = "submit" | "reset" | "button";

type Prop = {
    className?: string;
    children: React.ReactNode,
    type: ButtonType,
    onclick: () => void;
}

const Button = ({ className, children, type, onclick }: Prop) => {
  return (
    <button onClick={onclick} type={type} className={cn("border-blue-600 border-2 rounded-md py-1 flex items-center justify-center hover:bg-blue-500 itransition", className)}>
      {children}
    </button>
  );
}

export default Button;
