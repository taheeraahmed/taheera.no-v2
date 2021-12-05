
   
import { Button } from "@mui/material";
import React, {useEffect, useState, useContext} from "react";
import { ThemeContext } from "styled-components";
import { useTranslation } from "react-i18next";

const ImageGenerator = () => {
    const [image, setImage] = useState([]);
      const { t } = useTranslation();
      const themeContext = useContext(ThemeContext);

    const handleClick = () => {
        fetch("https://meme-api.herokuapp.com/gimme/1")
            .then(response => {
                return response.json();
            })
            .then(data => {
                setImage(data.memes[0].url);
            })
    }
    useEffect(() => {
            fetch("https://meme-api.herokuapp.com/gimme/1")
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    setImage(data.memes[0].url);
                })
    }
    ,[])
        const ButtonStyle = {
          "&.MuiButton-root": {
            fontSize: "12pt",
            color: "#ffffff",
            background: themeContext.gradient,
            boxShadow: themeContext.boxShad,
            marginTop: 2,
          },
        };

    return (
        <div className="imageContainer" style={{textAlign: 'center'}}>
            <div className="image">
                <img src={image} width="250px"alt="Meme"/>
            </div>
            <Button sx={ButtonStyle}onClick={() => handleClick()}>{t('clickHere')}</Button>
        </div>
    );
};

export default ImageGenerator;
