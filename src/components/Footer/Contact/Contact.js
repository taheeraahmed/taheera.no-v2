import React from 'react'
import { Chip } from '@mui/material';
import { Mail, PhoneIphone } from '@mui/icons-material';
import './contact.scss'

const Contact = () => {
  return (
    <div className="contact">
      <Chip sx={{backgroundColor: 'transparent'}} icon={<PhoneIphone sx={{fontSize: 15}}/>} label="+47 949 86 709" />
      <Chip sx={{backgroundColor: 'transparent'}} icon={<Mail sx={{fontSize: 15}}/>} label="taheera@hotmail.com" />
    </div>
  )
}

export default Contact
