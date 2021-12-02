
   
import React, {useEffect, useState} from "react";

const ImageGenerator = () => {
    const [image, setImage] = useState([]);

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
    return (
        <div className="imageContainer">
            <div className="image">
                <img src={image} width="250px"alt="Meme"/>
            </div>
            <button onClick={() => handleClick()}>Trykk her</button>
        </div>
    );
};

export default ImageGenerator;
