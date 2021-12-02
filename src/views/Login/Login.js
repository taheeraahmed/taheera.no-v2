import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../../assets/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.scss";
import { Button, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "styled-components";


const Login = () => {
  const { t } = useTranslation();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const themeContext = useContext(ThemeContext);
  console.log(error)
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (loading) {
      // maybe trigger a loading screen
      return "loading";
    }
    if (user) history.replace("/dashboard");
  }, [user, loading, history]);

  const TextFieldStyle = {
    "&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: themeContext.color,
    },
  };

  const ButtonStyle = {
    "&.MuiButton-root": {
      fontSize: "12pt",
      color: "#ffffff",
      background: themeContext.gradient,
    },
  };
  return (
    <div className="login">
      <div className="login__container">
        <h1>{t("common.login")}</h1>
        <div className="subtitle">
          <p>{t("common.douche")}</p>
          <p>{t("common.douche2")}</p>
          <p>{t("common.douche3")}</p>
        </div>
        <TextField
          sx={{TextFieldStyle}}
          variant="filled"
          margin="dense"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label={t("common.email")}
          required
        />
        <TextField
          variant="filled"
          type="password"
          margin="dense"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label={t("common.password")}
          required
        />
        <br />
        <Button
          style={{marginBottom: 4}}
          sx={ButtonStyle}
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          {t("common.login")}
        </Button>
        <Button sx={ButtonStyle} onClick={signInWithGoogle}>
          {t("common.loginGoogle")}
        </Button>
      </div>
    </div>
  );
}
export default Login;
