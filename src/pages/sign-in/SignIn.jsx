import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { loginSchema } from "./models";
import ErrorMessage from "../../common/components/ErrorMessage";
import { useLogInMutation } from "./hooks/useLogInMutation";

function SignIn() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });
  const signInAccount = useLogInMutation(setError)
  const onSubmit = async (data) => {
    await signInAccount.mutateAsync(data)
  }
  return (
    <div className="container container__sign-container">
      <div className="form-wrapper">
        <h1 className="form-wrapper__title">Войти</h1>
        <form className="form-wrapper__form sign-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="sign-form__input input"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && <ErrorMessage errorMessage={errors.email.message} />}
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
            <span className="sign-form__span">Нет аккаунта?</span>
            <Link className="sign-form__link" to={"/sign-up"}>
              Зарегистрируйся
            </Link>
          </div>
          {errors.root && <ErrorMessage errorMessage={errors.root.message} />}
          <button disabled={signInAccount.isPending} type="submit" className="sign-form__button">
            {signInAccount.isPending ? "Входим..." : "Войти"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
