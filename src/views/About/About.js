import Card from "../../components/Card/Card";
import React from "react";
import "./about.scss";
import { Grid } from "@mui/material";
import Tur from "../../assets/tur.jpg";

const About = () => {
  return (
    <div className="about">
      <Grid container spacing={2} alignItems="center" justify="center">
        <Grid item md={12}>
          <h1>Om meg</h1>
          <p style={{ textAlign: "center" }}>
            Litt kort info om hvem jeg er og hva jeg liker
          </p>
        </Grid>

        <Grid item md={4}>
          <Card src={Tur} heading="Tur glad">
            Jeg er selvfølgelig veldig glad i å gå turer. Hvem er vel ikke det?
            Går ikke så mye på tur alene da, pleier å gå med venner :)))
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card src="imagesrc" heading="Strikking">
            Strikking er en hobby jeg tok på meg under corona tider. Har siden
            den gang strikket opp til flere gensere og mange par med votter
            (fordi hele familien min plutselig skulle ha et par hver??)
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card src="imagesrc" heading="Styrketrening">
            Veldig glad i å løfte vekter, jo tyngre jo bedre. Kan faktisk skryte
            på meg to PR-er i benk på 50 og knebøy på 100. Har holdt på med
            styrketrening siden starten på videregående.
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card src="imagesrc" heading="Hobby">
            Hei jeg er kult og skriver
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
