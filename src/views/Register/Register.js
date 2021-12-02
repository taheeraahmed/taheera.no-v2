import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";
import { ThemeContext } from "styled-components";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../assets/firebase/firebase";
import "./Register.scss";

const Register = () =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();

  console.log(error)

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/dashboard");
  }, [user, loading,history]);

  const ButtonStyle = {
    "&.MuiButton-root": {
      fontSize: "12pt",
      color: "#ffffff",
      boxShadow: themeContext.boxShad,
      background: themeContext.gradient,
    },
  };
  return (
    <div className="register">
      <div className="register__container">
        <h1>{t("common.register")}</h1>
        <TextField
          margin="dense"
          variant="filled"
          type="text"
          color="secondary"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label={t("common.name")}
        />
        <TextField
          margin="dense"
          variant="filled"
          type="text"
          value={email}
          color="secondary"
          onChange={(e) => setEmail(e.target.value)}
          label={t("common.email")}
        />
        <TextField
          margin="dense"
          variant="filled"
          color="secondary"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label={t("common.password")}
        />
        <Button
          style={{ marginBottom: 7, marginTop: 10 }}
          sx={ButtonStyle}
          onClick={register}
        >
          {t("common.register")}
        </Button>
        <Button
          style={{ marginBottom: 7 }}
          sx={ButtonStyle}
          onClick={signInWithGoogle}
        >
          {t("common.registerGoogle")}
        </Button>
        <div className="alreadyUser">
          {t("common.alreadyAccount")}
          <Link to="/login">{t("common.loginhere")}</Link>
        </div>
      </div>
    </div>
  );
}
export default Register;
