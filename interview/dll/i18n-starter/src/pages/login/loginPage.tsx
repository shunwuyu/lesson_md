import * as React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { useTranslation } from "react-i18next";

const styles = theme =>
  createStyles({
    card: {
      maxWidth: 400,
      margin: "0 auto"
    }
  });

interface Props extends RouteComponentProps, WithStyles<typeof styles> {}

const LoginPageInner = (props: Props) => {
  const { classes } = props;
  const { t, i18n } = useTranslation();
  return (
    <>
      <Card className={classes.card}>
        <CardHeader title={t("login")} />
      </Card>
    </>
  )
}



export const LoginPage = withStyles(styles)(withRouter(LoginPageInner));