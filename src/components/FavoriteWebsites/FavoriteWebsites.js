import React, { Component } from "react";
import Instagram from "../../assets/images/instagram.svg";
import Netflix from "../../assets/images/netflix.svg";
import Blackboard from "../../assets/images/blackboard.svg";
import Reddit from "../../assets/images/reddit.svg";
import TvIcon from "@mui/icons-material/Tv";
import IconHolder from "./IconHolder/IconHolder";
import './favoriteWebsites.css'

const FavoriteWebSites = () => {
    return (
      <div className="FavoriteWebSites">
        <h1>Favoritter</h1>
        <div className="Icons">
          <IconHolder
            title="Blackboard"
            image={Blackboard}
            link="https://innsida.ntnu.no/blackboard"
          />
          <IconHolder title="Reddit" image={Reddit} link="https://reddit.com" />
          <IconHolder
            title="Instagram"
            image={Instagram}
            link="https://instagram.com"
          />
          <IconHolder title="NRK" link="https://nrk.no">
            <TvIcon />
          </IconHolder>
          <IconHolder title="Netflix" link="https://www.netflix.com">
            <img src={Netflix} alt="icon" style={{width:'fit-content'}} />
          </IconHolder>
        </div>
      </div>
    );
}

export default FavoriteWebSites;
