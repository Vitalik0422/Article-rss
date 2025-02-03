import { useForm } from 'react-hook-form';
import Button from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { SignUpRequest } from '../../types/types';
import { signUpUser } from '../../features/auth/signUpThunk';
import { AppDispatch } from '../../store/store';
import { isLogin } from '../../features/auth/authSelector';
import { useNavigate } from 'react-router';

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const selector = useSelector(isLogin);
  const { handleSubmit, register } = useForm<SignUpRequest>();
  const handleSignUp = (data: SignUpRequest) => {
    dispatch(signUpUser(data));
    if (selector) {
      navigate('/');
    }
  };

  return (
    <form action="" onSubmit={handleSubmit(handleSignUp)}>
      <Input register={register} name="email" />
      <Input register={register} name="name" />
      <Input register={register} name="password" />
      <Button btnLabel="Register" />
    </form>
  );
};

export default RegisterForm;
