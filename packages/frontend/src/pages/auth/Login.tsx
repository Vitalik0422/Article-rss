import { Input } from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { useForm } from 'react-hook-form';
import {LoginRequest } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../features/auth/authThunk';
import { AppDispatch } from '../../store/store';
import { selectToken } from '../../features/auth/authSelector';

export const Login = () => {
  const token = useSelector(selectToken)
  console.log(token);
  
  const dispatch = useDispatch<AppDispatch>()
  const { handleSubmit, register } = useForm<LoginRequest>();
  const handleLogin = (data: LoginRequest) => {
    dispatch(loginUser(data))


  };
  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <Input register={register} name={'email'} />
      <Input register={register} name={'password'} />
      <Button btnLabel="Login"></Button>
    </form>
  );
};
