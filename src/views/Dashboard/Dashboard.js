import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import "./Dashboard.css";
import { auth, db, logout } from "../../assets/firebase/firebase";
import { useTranslation } from "react-i18next";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  console.log(error)
  const [name, setName] = useState("");
  const history = useHistory();
  const { t } = useTranslation();

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

  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
    fetchUserName();
  }, [user, loading]);

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        {t("dashboard.loggedInAs")}
        <div>{name}</div>
        <div>{user?.email}</div>
        <button className="dashboard__btn" onClick={logout}>
          {t("dashboard.logOut")}
        </button>
      </div>
    </div>
  );
}
export default Dashboard;
