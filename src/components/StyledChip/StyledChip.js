import { Chip } from '@mui/material'
import React from 'react'

const styles = {
  chip: {
      fontWeight: 'bolder',
      marginTop: '1em',
      marginRight: '8px',
      boxShadow: '0 1px 6px 3px rgba(255, 105, 135, .3)',
      borderRadius: '80px',
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      color: 'white',
  },
  link: {
      color: 'black',
      padding: '10pt',
      
      
  }
};

const StyledChip = ({chipList}) => {
  const listChips = chipList.map((item, index) =>(
    <Chip label={item} key={index} style={styles.chip}/>
   )
);
  return (
    <div>
      {listChips}
    </div>
  )
}

export default StyledChip
