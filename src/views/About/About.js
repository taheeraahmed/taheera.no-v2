import React, {useEffect} from "react";
import "./about.scss";
import { Grid, Stack } from "@mui/material";
import Tur from "../../assets/tur.jpg";
import BucketHat from "../../assets/buckethat.jpg";
import Trene from "../../assets/trene.jpg";
import Lese from "../../assets/lese.jpg"
import ImageWithDescription from "../../components/ImageWithDescription/ImageWithDescription";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="about">
      <Stack container spacing={2} alignItems="center" justify="center">
        <Grid item md={12}>
          <h1>Om meg</h1>
          <p style={{ textAlign: "center" }}>
            Litt kort info om hvem jeg er, hva jeg gjør på fritiden og hva jeg liker
          </p>
        </Grid>
        <Grid item md={8}>
          <ImageWithDescription src={Tur} heading="Turglad">
            Jeg er selvfølgelig veldig glad i å gå turer. Hvem er vel ikke det?
            Går ikke så mye på tur alene da, pleier å gå med venner :))) Den fineste turen jeg har vært på var også den verste: Skåla 1638 moh. 
          </ImageWithDescription>
        </Grid>
        <Grid item md={8}>
          <ImageWithDescription src={BucketHat} heading="Strikking">
            Strikking er en hobby jeg tok på meg under corona tider. Har siden
            den gang strikket opp til flere gensere og mange par med votter
            (fordi hele familien min plutselig skulle ha et par hver??)
          </ImageWithDescription>
        </Grid>
        <Grid item md={8}>
          <ImageWithDescription src={Trene} heading="Styrketrening">
            Veldig glad i å løfte vekter, jo tyngre jo bedre. Kan faktisk skryte
            på meg to PR-er i benk på 50 og knebøy på 100. Har holdt på med
            styrketrening siden starten på videregående.
          </ImageWithDescription>
        </Grid>
        <Grid item md={8}>
          <ImageWithDescription src={Lese} heading="Lese">
            Også en hobby som dukket opp under corona. Hatet det som barn, elsker det som voksen. Omg jeg skrev nettopp voksen. Mest glad i å lese på sommeren, fordi da kan jeg lese ute i sola og chille maks
          </ImageWithDescription>
        </Grid>
      </Stack>
    </div>
  );
};

export default About;
