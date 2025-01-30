import { InputHTMLAttributes } from 'react';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

interface Props<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<T>;
  name: Path<T>;
}

export const Input = <T extends FieldValues>({
  register,
  name,
  ...props
}: Props<T>) => {
  return <input type="text" {...register(name)} {...props} />;
};
