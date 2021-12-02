import React, { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import "./Dashboard.scss";
import { auth, db, logout } from "../../assets/firebase/firebase";
import { useTranslation } from "react-i18next";
import { Button, Grid } from "@mui/material";
import { ThemeContext } from "styled-components";
import ImageGenerator from "../../components/ImageGenerator/ImageGenerator";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  console.log(error)
  const [name, setName] = useState("");
  const history = useHistory();
  const { t } = useTranslation();
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
      const fetchUserName = async () => {
        try {
          const query = await db
            .collection("users")
            .where("uid", "==", user?.uid)
            .get();
          const data = await query.docs[0].data();
          setName(data.name);
        } catch (err) {
          console.error(err);
          alert("An error occured while fetching user data");
        }
      };
    if (loading) return;
    if (!user) return history.push("/");
    fetchUserName();
  }, [user, loading, history]);
    const ButtonStyle = {
      "&.MuiButton-root": {
        fontSize: "12pt",
        color: "#ffffff",
        background: themeContext.gradient,
        boxShadow: themeContext.boxShad,
        marginTop: 2,
      },
    };

  return (
    <div className="dashboard">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Grid item>
          <div className="box">
            <p>Yo</p>
          </div>
        </Grid>
        <Grid item>
          <div className="box">
            <p>Yo</p>
          </div>
        </Grid>
        <Grid item>
          <div className="box">
            <p>Yo</p>
          </div>
        </Grid>
        <Grid item>
          <div className="box">
            <p>Yo</p>
          </div>
        </Grid>
        <Grid item>
          <div className="box">
            <p>Yo</p>
          </div>
        </Grid>
        <Grid item>
          <div className="box">
            <p>Yo</p>
          </div>
        </Grid>
        <Grid item>
          <div className="box">
            <ImageGenerator/>
          </div>
        </Grid>
        <Grid item>
          <div className="box" style={{textAlign: 'center'}}>
            {t("dashboard.loggedInAs")}
            <div>{name}</div>
            <div>{user?.email}</div>
            <Button
              style={{ marginBottom: 4 }}
              sx={ButtonStyle}
              onClick={logout}
            >
              {t("dashboard.logOut")}
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default Dashboard;
