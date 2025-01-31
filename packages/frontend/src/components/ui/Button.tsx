import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnLabel: string;
}

const Button = ({ btnLabel, ...props }: Props) => {
  return <button {...props}>{btnLabel}</button>;
};

export default Button;
