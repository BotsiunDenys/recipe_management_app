import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import CustomInput from "../components/CustomInput";
import loginFormSchema from "../models/formValidationSchema";
import { useAppDispatch, useAppSelector } from "../store/store";
import { login, registration } from "../store/slices/authSlice";
import "react-toastify/dist/ReactToastify.css";

interface LoginFormValues {
  username: string;
  password: string;
}

const Auth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuthFailed = useAppSelector((state) => state.auth.error);
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  const loading = useAppSelector((state) => state.auth.loading);
  const [isRegForm, setIsRegForm] = useState(false);
  useEffect(() => {
    if (isLogged) {
      navigate("/");
    } else {
      if (isAuthFailed && !isRegForm) {
        toastLogin("Wrong username or password");
      } else if (isAuthFailed && isRegForm) {
        toastLogin("User with this username already exists");
      }
    }
  }, [isAuthFailed, isLogged, isRegForm, navigate]);
  const toastLogin = (message: string) => {
    toast(message);
  };
  const initialValues: LoginFormValues = {
    username: "",
    password: "",
  };
  if (loading)
    return <p className="text-3xl text-white font-bold mt-10 text-center">Loading...</p>;
  return (
    <main className="flex justify-center items-center text-white">
      <div className="my-32 p-8 rounded-lg bg-slate-900">
        <header className="text-center text-3xl">
          {isRegForm ? "Registration" : "Sign in"}
        </header>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            if (isRegForm) {
              dispatch(registration(values));
            } else {
              dispatch(login(values));
            }
            actions.resetForm();
          }}
          validationSchema={loginFormSchema}
        >
          <Form className="flex flex-col mt-6 gap-6">
            <CustomInput
              label="Username"
              name="username"
              placeholder="Username"
              type="text"
              className="flex flex-col gap-1 text-xl text-black"
            />
            <CustomInput
              label="Password"
              name="password"
              placeholder="Password"
              type="password"
              className="flex flex-col gap-1 text-xl text-black"
            />
            <p className="text-center text-xl text-blue">
              {isRegForm ? "" : `New client?${" "}`}
              <button
                type="button"
                className=" text-cyan-600 hover:text-cyan-800 transition-colors outline-none"
                onClick={() => {
                  setIsRegForm((prev) => !prev);
                }}
              >
                {isRegForm ? "Sign in" : "Sign up"}
              </button>
            </p>
            <button
              className="self-center bg-transparent p-2 border-2 rounded-md border-orange-400 hover:bg-orange-400 transition-colors w-36 text-xl text-center"
              type="submit"
            >
              Sign in
            </button>
          </Form>
        </Formik>
      </div>
      <ToastContainer theme="dark" />
    </main>
  );
};

export default Auth;
