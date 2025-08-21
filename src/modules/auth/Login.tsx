import type React from "react";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import validateEmail from "../../utils/regexEmail";
// import { handleInputChange } from "../../utils/handleInputChange";
// TODO: REMOVER handleInputChange de UTILS
import { loginUser } from "@root/services/api";
// import Toast from "@root/shared/Toast";
import niteImg from "@images/nite-logo.png";

const Login = () => {
  /* 1.* UseState Section */
  /*   *.1 Form Data (username, password) */
  //TODO: alterar email para username no login
  const [form, setForm] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  /*   *.2 Validation Data  */
  const [validation, setValidation] = useState<LoginFormValidation>({
    emailRequired: false,
    emailInvalid: false,
    passwordInvalid: false,
  });

  /*   *.3 Validation Boolean */
  /*const [valid, setValid] = useState<boolean>(false); */

  /*   *.4 Validation Enablement */
  const [enableValidation, setEnableValidation] = useState(false);

  /*   *.4 Login Error  */
  const [loginError, setLoginError] = useState<Error>();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  /* 2.  USE EFFECT SECTION */
  useEffect(() => {
    console.log({ form });
    /* Finishing Loading */
    setIsLoading(false);

    /* Update Validations */
    if (enableValidation) {
      /* const newValidations = {
        emailRequired: form.email.trim() === "",
        emailInvalid:
          form.email.trim() !== "" && !validateEmail(form.email),
        passwordInvalid: form.password.trim() === "",
      }; */

      validation.emailInvalid =
        form.email.trim() !== "" && !validateEmail(form.email);
      validation.emailRequired = form.email.trim() === "";
      validation.passwordInvalid = form.password.trim() === "";

      setValidation((prev) => prev);
    }
  }, [form, validation, enableValidation, isLoading]);

  /* 3.* FUNCTIONS SECTIONS */
  /*   *.1 isValid */
  const isValid = (): boolean =>
    enableValidation &&
    validation.emailRequired == false &&
    validation.emailInvalid == false &&
    validation.passwordInvalid == false;

  /*  *.2 validateForm  */
  const validateForm = (fieldName: string) => {
    if (fieldName === "email") {
      setValidation((prev) => ({
        ...prev,
        emailInvalid: !validateEmail(form.email),
      }));
    } else if (fieldName === "password") {
      setValidation((prev) => ({
        ...prev,
        passwordInvalid: form.password.trim() === "",
      }));
    }
  };

  /*   *.2 Handle Change*/
  const handleBlur = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof typeof form
  ): void => {
    if (enableValidation == false) setEnableValidation(true);

    const value = e.currentTarget.value;

    validateForm(fieldName);
    setForm({ ...form, [fieldName]: value.trim() });
  };

  /*   *.3 Handle Input */
  const handleInput = (
    e: React.FormEvent<HTMLInputElement>,
    fieldName: keyof typeof form
  ) => {
    if (enableValidation == false) setEnableValidation(true);

    const value = e.currentTarget.value;

    validateForm(fieldName);
    setForm({ ...form, [fieldName]: value.trim() });
  };

  /*   *.3 Handle Submit */
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // enableValidation();
    setEnableValidation(true);

    setTimeout(() => {
      if (isValid()) {
        loginUser(form)
          .then((response) => {
            console.log(response);
            alert(response);
          })
          .catch((error) => {
            if (error.response) {
              setLoginError({
                title: "Erro ao efetuar Login",
                message: error.response.data + "\n" + error.response.headers,
                code: error.response.code,
                onClose: () => {},
              });
            } else {
              setLoginError({
                title: "Erro ao efetuar Login",
                message: error,
                code: 500,
                onClose: () => {},
              });
            }

            /* Toast({
              title: "Erro",
              content: `Erro ao fazer o login: ${error}`,
              isError: true,
            }); */
            // alert(error);
            alert(
              `${
                loginError?.message
              } - Error Code:${loginError?.code.toString()}`
            );
          });
      }
    }, 100);
  };

  /* 4.* Types n Interfaces */
  type LoginFormData = {
    email: string;
    password: string;
  };

  type LoginFormValidation = {
    emailRequired: boolean | true;
    emailInvalid: boolean | true;
    passwordInvalid: boolean | true;
  };

  type Error = {
    title: string;
    message: string;
    code: number;
    onClose: () => void;
  };

  /* DEBUG */
  console.log({
    validationfields:
      validation.emailInvalid &&
      validation.emailRequired &&
      validation.passwordInvalid,
    isValid: isValid(),
    validationEnabled: enableValidation,
  });
  /* 5. Render */
  if (isLoading) {
    return (
      <>
        <h3>Carregando</h3>
        <span>...</span>
      </>
    );
  }
  return (
    <>
      <div className="logoNite">
        <img src={niteImg} alt="Logo Nite" style={{ width: "350px" }} />
      </div>

      <form className="forms" onSubmit={handleFormSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="campoEmail"
            value={form.email}
            placeholder="Digite seu email"
            onInput={(e) => handleInput(e, "email")}
            onBlur={(e) => handleBlur(e, "email")}
          />
          {validation.emailRequired && (
            <div className="error" id="email-required-error">
              Campo obrigatório
            </div>
          )}
          {!validation.emailRequired && validation.emailInvalid && (
            <div className="error" id="email-invalid-error">
              Email inválido
            </div>
          )}
        </div>

        <div>
          <label className="labelSenha">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            className="campoSenha"
            value={form.password}
            placeholder="Digite sua senha"
            onInput={(e) => handleInput(e, "password")}
            onBlur={(e) => handleBlur(e, "password")}
          />
          {validation.passwordInvalid && (
            <div className="error" id="password-required-error">
              Campo obrigatório
            </div>
          )}
          <div className="esqueciSenhaPosicao">
            <Link to="/resetPassword" className="esqueciSenha">
              Esqueceu a senha?
            </Link>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="entrar"
            id="login-button"
            disabled={!isValid()}
          >
            Entrar
          </button>
        </div>

        <div className="register">
          <span>Não tem uma conta?</span>
          <Link to="/register" className="fazerCadastro">
            Fazer cadastro
          </Link>
        </div>
      </form>
    </>
  );
};

export default Login;
