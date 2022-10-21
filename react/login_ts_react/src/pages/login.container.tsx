import * as React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import makeStyles from "@material-ui/styles/makeStyles";
import createStyles from "@material-ui/styles/createStyles";
import CardContent from "@material-ui/core/CardContent";
import { LoginEntity } from "../model/login";
import { LoginComponent } from "./login.component";
import { isValidLogin } from "../api/login";
import { useNavigate } from 'react-router-dom'
import { NotificationComponent } from "../common";

interface Props {}
const useFormStyles = makeStyles((theme) =>
  createStyles({
    card: {
      maxWidth: 400,
      margin: "0 auto",
    },
  })
);

export const LoginContainer: React.FC<Props> = (props) => {
    const [isShowAlert, setShowAlert] = React.useState(false);
    const navigate = useNavigate();
    const classes = useFormStyles();
    const handleLogin = (login: LoginEntity) => {
        isValidLogin(login).then(loginSucceeded);
    };
    const loginSucceeded = (isValid: boolean) => {
        if (isValid) {
            navigate("/pageB");
        } else {
          setShowAlert(true);
        }
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