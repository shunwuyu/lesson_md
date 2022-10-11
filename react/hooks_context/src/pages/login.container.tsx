import * as React from "react";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import createStyles from "@material-ui/styles/createStyles";
import makeStyles from "@material-ui/styles/makeStyles";
import { NotificationComponent, SessionContext } from "../common";
import { LoginComponent } from "./login.component";
import { isValidLogin } from "../api/login";
import { LoginEntity } from "../model/login";

const useFormStyles = makeStyles((theme) =>
  createStyles({
    card: {
      maxWidth: 400,
      margin: "0 auto",
    },
  })
);

interface Props {}

export const LoginContainer: React.FC<Props> = (props) => {
  const classes = useFormStyles();
  const loginContext = React.useContext(SessionContext);
  const [isShowAlert, setShowAlert] = React.useState(false);
  const history = useHistory();

  const loginSucceeded = (isValid: boolean, login: LoginEntity) => {
    if (isValid) {
      history.push("/pageB");
      loginContext.updateLogin(login.login);
    } else {
      setShowAlert(true);
    }
  };

  const handleLogin = (login) => {
    isValidLogin(login).then((isValid) => loginSucceeded(isValid, login));
  };

  return (
    <>
      <Card className={classes.card}>
        <CardHeader title="Login" />
        <CardContent>
          <LoginComponent onLogin={handleLogin} />
          <NotificationComponent
            show={isShowAlert}
            message="Invalid login or password, please type again"
            onClose={() => setShowAlert(false)}
          />
        </CardContent>
      </Card>
    </>
  )
}