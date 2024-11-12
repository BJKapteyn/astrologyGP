import { useEffect, useState, useRef } from "react";
import diary from '../Pics/Landscapes/jpeg/diary.jpg';
import girlOnBeach from '../Pics/Landscapes/jpeg/girlOnBeach.jpg';
import floating from '../Pics/Landscapes/jpeg/floating.jpg';

export function useRandomImageUrl() {
    const [selectedImage, setSelectedImage] = useState(null);
    const imageArray = useRef([diary, girlOnBeach, floating]);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * imageArray.current.length);

        if(!selectedImage) 
            setSelectedImage(imageArray.current[randomIndex]);
    }, [selectedImage])

    return selectedImage;
}