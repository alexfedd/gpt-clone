import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { registrationSchema } from "./models";
import ErrorMessage from "../../common/components/ErrorMessage";
import { useSignUpMutation } from "./hooks/useSignUpMutation";

function SignUp() {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registrationSchema) });
  const useSignUp = useSignUpMutation(setError);
  const onSubmit = async (data) => {
    await useSignUp.mutateAsync(data);
  };
  return (
    <div className="container container__sign-container">
      <div className="form-wrapper">
        <h1 className="form-wrapper__title">Создать аккаунт</h1>
        <form
          className="form-wrapper__form sign-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="email"
            className="sign-form__input input"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && <ErrorMessage errorMessage={errors.email.message} />}
          <input
            type="text"
            className="sign-form__input input"
            placeholder="Username"
            {...register("username")}
          />
          {errors.username && (
            <ErrorMessage errorMessage={errors.username.message} />
          )}
          <input
            type="password"
            className="sign-form__input input"
            placeholder="Пароль"
            {...register("password")}
          />
          {errors.password && (
            <ErrorMessage errorMessage={errors.password.message} />
          )}
          <div className="sign-form__sign-option">
            <span className="sign-form__span">Уже есть аккаунт?</span>
            <Link className="sign-form__link" to={"/sign-in"}>
              Войти
            </Link>
          </div>
          {errors.root && <ErrorMessage errorMessage={errors.root.message} />}
          <button type="submit" className="sign-form__button">
            {useSignUp.isPending ? "Регистрируемся..." : "Зарегистрироваться"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
