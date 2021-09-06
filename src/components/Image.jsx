import react, { useState } from "react";

const Image = props => {

    //Estado
    const [images, setImages] = useState([]);

    const handleGetImagesApi = async () =>{
        const response = await fetch("https://picsum.photos/200")
        console.log(response);
    }

    return (
        <>
        <img src="https://picsum.photos/250/300" alt="" />
        <img src="https://picsum.photos/250/300" alt="" />
        <img src="https://picsum.photos/250/350" alt="" />
        <img src="https://picsum.photos/200/300" alt="" />
        <img src="https://picsum.photos/450/500" alt="" />
        <img src="https://picsum.photos/350/300" alt="" />
        <img src="https://picsum.photos/150/100" alt="" />
        <img src="https://picsum.photos/250/300" alt="" />
        <img src="https://picsum.photos/450/500" alt="" />
        <img src="https://picsum.photos/150/100" alt="" />
        <img src="https://picsum.photos/150/300" alt="" />
        </>
    );
};


export default Image;