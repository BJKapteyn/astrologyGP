import { useState, useRef, useEffect } from "react";
import diary from '../Pics/Landscapes/jpeg/diary.jpg';
import girlOnBeach from '../Pics/Landscapes/jpeg/girlOnBeach.jpg';
import floating from '../Pics/Landscapes/jpeg/floating.jpg';

export function useRandomImageUrl() {
    const [selectedImage, setSelectedImage] = useState(null);
    const imageArray = useRef([diary, girlOnBeach, floating]);
    const randomIndex = useRef(Math.floor(Math.random() * imageArray.current.length));

    useEffect(() => {
        let active = true;
        if(!selectedImage) 
            if(active){
                setSelectedImage(imageArray.current[randomIndex.current]);
            }

        return () => active = false;
    }, [selectedImage])

    return selectedImage;
}