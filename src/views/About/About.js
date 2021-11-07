import Card from '../../components/Card/Card'
import React from 'react'
import './about.scss'
import { Grid } from '@mui/material'
import Tur from '../../assets/tur.jpg'

const About = () => {
  return (
    <div className="about">
      <Grid container
        spacing={2}
        alignItems="center"
        justify="center"
      >
        <Grid item md={6}>
        <h1>Om meg</h1>
        <p style={{textAlign: 'center'}}>Litt kort info om hvem jeg er og hva jeg liker</p>
        </Grid>

        <Grid item md={6}>
        <Card src={Tur} heading="Tur glad">
          Jeg er glad i å gå turer 
        </Card>
        </Grid>
        <Grid item md={6}>
        <Card src="imagesrc" heading="Hobby">
          Hei jeg er kult og skriver
        </Card>
        </Grid>
        <Grid item md={6}>
        <Card src="imagesrc" heading="Hobby">
          Hei jeg er kult og skriver
        </Card>
        </Grid>
        <Grid item md={6}>
        <Card src="imagesrc" heading="Hobby">
          Hei jeg er kult og skriver
        </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default About
