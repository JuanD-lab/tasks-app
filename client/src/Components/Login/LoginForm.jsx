import React from "react";
import { Formik, Field } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InputTextField from "../Global/InputTextField";

const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <div className="w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100">
      <h1 className="text-5xl font-semibold">Welcome Back</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, actions) => {
          actions.setSubmitting(true);
          axios
            .post(`${import.meta.env.VITE_API_URL}/login`, values)
            .then((res) => {
              console.log(res);
              localStorage.token = res.data.token;
              localStorage.id = res.data.id;
              axios.defaults.headers.common = {
                Authorization: `${localStorage.token}`,
              };
              setTimeout(() => navigate("/"), 2000);
              actions.setSubmitting(false);
            })
            .catch((error) => {
              actions.setSubmitting(false);
              actions.setErrors(error);
              console.log(error);
            });
        }}
      >
        {(props) => (
          <form className="mt-8" onSubmit={props.handleSubmit}>
            {/* <h1>Inicio de sesión</h1> */}
            <Field
              component={InputTextField}
              type="email"
              placeholder="Escribe tu correo electrónico"
              label="Email"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
              name="email"
            />
            <Field
              component={InputTextField}
              type="password"
              label="Password"
              placeholder="Contraseña"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.password}
              name="password"
            />
            {props.errors.name && (
              <div
                className="text-red-600 mb-6 transition-opacity ease-in-out"
                id="feedback"
              >
                Credenciales inválidas
              </div>
            )}
            {props.isSubmitting ? (
              <button
                disabled
                type="button"
                className="py-4 justify-center mr-2 text-lg font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center w-full"
              >
                <svg
                  role="status"
                  className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#1C64F2"
                  />
                </svg>
                Loading...
              </button>
            ) : (
              <button
                className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-white rounded-lg text-black font-medium text-lg w-full border border-gray-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10"
                type="submit"
              >
                Iniciar Sesion
              </button>
            )}
          </form>
        )}
      </Formik>
    </div>
  );
};
export default LoginForm;
