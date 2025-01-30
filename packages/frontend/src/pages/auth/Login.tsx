import { Input } from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { useForm } from 'react-hook-form';
import { LoginRequest } from '../../types/types';

export const Login = () => {
  const { handleSubmit, register } = useForm<LoginRequest>();

  const handleLogin = () => {
    return;
  };
  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <Input register={register} name={'email'} />
      <Input register={register} name={'password'} />
      <Button btnLabel="Login"></Button>
    </form>
  );
};
