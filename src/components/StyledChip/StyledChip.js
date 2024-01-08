import { Chip } from '@mui/material'
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components';


const StyledChip = ({chipList}) => {

  const themeContext = useContext(ThemeContext);

  const styles = {
    chip: {
      fontWeight: "bolder",
      marginTop: "1em",
      marginRight: "8px",
      boxShadow: themeContext.boxShad,
      borderRadius: "80px",
      background: themeContext.gradientChip,
      color: "white",
    },
    link: {
      color: "black",
      padding: "10pt",
    },
  };

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
