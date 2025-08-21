import type React from "react";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import validateEmail from "../../utils/regexEmail";
// import { handleInputChange } from "../../utils/handleInputChange";
// TODO: REMOVER handleInputChange de UTILS 
import { apiService } from "../../services/apiServices";
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
  const [loginError, setLoginErro] = useState<Error>();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  /* 2.  USE EFFECT SECTION */
  useEffect(() => {
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
  }, [form]);

  /* 3.* FUNCTIONS SECTIONS */
  /*   *.1 isValid (boolean variable) */
  const isValid = (): boolean =>
    enableValidation &&
    validation.emailRequired == false &&
    validation.emailInvalid == false &&
    validation.passwordInvalid == false;

  /*   *.2 Handle Change*/
  const handleChange = (
    e: React.InputEvent<HTMLInputElement>,
    fieldName: keyof typeof form
  ) => {
    if (enableValidation == false) setEnableValidation(true);
    setForm({...form, [fieldName]: e.currentTarget.value})
  };

  /*   *.3 Handle Submit */
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // enableValidation();
    setEnableValidation(true);

    setTimeout(() => {
      if (isValid()) {
        apiService
          .loginUser(form)
          .then((response) => alert(response))
          .catch((error) => {
            /* Toast({
              title: "Erro",
              content: `Erro ao fazer o login: ${error}`,
              isError: true,
            }); */
            // alert(error);
            alert(error);
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
            onInput={(e) => handleChange(e, "email")}
            onBlur={() => setEnableValidation(true)}
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
            onInput={(e) => handleChange(e, "password")}
            onBlur={() => setEnableValidation(true)}
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
