import type { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { authenticateUser } from "../store/authSilce";
import Input from "../components/forms/input";
import Error from "../components/forms/error";

interface IFormInput {
  username: string;
  email: string;
  password: string;
}

const Register: NextPage = () => {
  const dispatch = useAppDispatch();
  const {isProcessingRequest, accessToken, error} = useAppSelector((state) => state.authentication);
  console.log(process.env.API_HOST, 'process.env.API_HOST');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(authenticateUser(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Nazwa użytkownika"
        {...register("username", { required: "To pole jest wymagane" })}
      />
      {errors.username && <Error message={errors.username.message} />}

      <Input
        type="text"
        label="Email"
        {...register("email", {
          required: "To pole jest wymagane",
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "Niepoprawny format",
          },
        })}
      />
      {errors.email && <Error message={errors.email.message} />}

      <Input
        type="password"
        label="Hasło"
        {...register("password", {
          required: "To pole jest wymagane",
          minLength: {
            value: 8,
            message: "Hasło musi posiadać 8 znaków",
          },
        })}
      />
      {errors.password && <Error message={errors.password.message} />}

      {error && <Error message={error} />}


      <Input type="submit" />
    </form>
  );
};

export default Register;
