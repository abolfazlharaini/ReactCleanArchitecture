"use client"
import { Formik, Form, Field } from "formik";

import usePage from './usePage';
import loginValidation from "./loginValidation";
import TextField from "@/base/input/TextField";

export default function Home() {
  const {
    onLogin,
    onLogout,

    loginActionStatus,
    logoutActionStatus,
    loggedIn,
    userInfo,
  } = usePage();

  return (
    <main className="">
      <p>Api: https://jsonplaceholder.typicode.com/users</p>
      {loggedIn &&
        <p>Logged in</p>
      }
      {userInfo && <>
        <p>{userInfo.email}</p>
        <button onClick={onLogout}>Logout</button>
      </>}
      {!loggedIn &&
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={loginValidation}
          onSubmit={(e) => {
            onLogin({
              email: e.email,
              password: e.password
            });
          }}>
          {() => (
            <Form>
              <TextField
                className="mt-3"
                inputProps={{
                  name: 'email',
                  type: 'email'
                }}
                labelProps={{ text: 'Email' }} />

              <TextField
                className="mt-3"
                inputProps={{
                  name: 'password',
                  type: 'password'
                }}
                labelProps={{ text: 'Password' }} />
              <button>
                Login
              </button>
            </Form>
          )}
        </Formik>
      }
    </main>
  )
}
