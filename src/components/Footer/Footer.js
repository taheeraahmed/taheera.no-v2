import React from 'react'
import './footer.scss'
import '../../styles/fonts.scss'
import { Grid } from '@mui/material'

const Footer = () => {
  return (
    <Grid container
    className="footer"
    spacing={5}
    alignItems="center"
    justifyContent="center">
      <Grid item>
      <h3>Kontakt</h3>
      <p>Mobil: +47 949 86 709</p>
      <p>Epost: taheera@hotmail.com</p>
      </Grid>
      <Grid item>
      <h3>Meny</h3>
      <p>Mobil: +47 949 86 709</p>
      <p>Epost: taheera@hotmail.com</p>
      </Grid>
      <Grid item>
      <h3>Lenker</h3>
      <p>Mobil: +47 949 86 709</p>
      <p>Epost: taheera@hotmail.com</p>
      </Grid>
    
    </Grid>
  )
}

export default Footer
