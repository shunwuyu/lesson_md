import * as React from "react";
import { Formik } from "formik";
import { Form } from "formik";
import { LoginEntity, createEmptyLogin } from "../model/login";
import { loginFormValidation } from "./login.validation";
import createStyles from "@material-ui/styles/createStyles";
import makeStyles from "@material-ui/styles/makeStyles";
import { TextFieldComponent } from "../common";
import Button from "@material-ui/core/Button";


interface PropsForm {
  onLogin: (login) => void;
}

const useFormStyles = makeStyles((theme) =>
  createStyles({
    formContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    card: {
      maxWidth: 400,
      margin: "0 auto",
    },
  })
);


export const LoginComponent: React.FC<PropsForm> = (props) => {
  const { onLogin } = props;
  const classes = useFormStyles();
  return (
    <Formik
      onSubmit={onLogin}
      initialValues={createEmptyLogin()}
      validate={loginFormValidation.validateForm}
    >
       {() => (
         <Form>
           <div className={classes.formContainer}>
            <TextFieldComponent label="Name" name="login" />
            <TextFieldComponent
              label="Password"
              type="password"
              name="password"
            />
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
           </div>
         </Form>
       )}
    </Formik>
  )
}