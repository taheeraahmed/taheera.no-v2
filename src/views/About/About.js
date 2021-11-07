import Card from '../../components/Card/Card'
import React from 'react'
import './about.scss'
import { Grid } from '@mui/material'

const About = () => {
  return (
    <div className="about">
      <Grid container
        spacing={2}
      >
        <Grid item xs={12} md={4}>
        <Card text="Hei jeg heter taheera" src="imagesrc" heading="Hobby"/>
        </Grid>
        <Grid item xs={12} md={4}>
        <Card text="Hei jeg heter taheera" src="imagesrc" heading="Hobby"/>
        </Grid>
        <Grid item xs={12} md={4}>
        <Card text="Hei jeg heter taheera" src="imagesrc" heading="Hobby"/>
        </Grid>
        <Grid item xs={12} md={4}>
        <Card text="Hei jeg heter taheera" src="imagesrc" heading="Hobby"/>
        </Grid>
        <Grid item xs={12} md={4}>
        <Card text="Hei jeg heter taheera" src="imagesrc" heading="Hobby"/>
        </Grid>
        <Grid item xs={12} md={4}>
        <Card text="Hei jeg heter taheera" src="imagesrc" heading="Hobby"/>
        </Grid>
      </Grid>
    </div>
  )
}

export default About
