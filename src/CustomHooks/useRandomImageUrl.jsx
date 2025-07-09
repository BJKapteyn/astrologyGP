import { useState, useRef, useEffect } from "react";
import diary from '../Pics/Landscapes/jpeg/diary.jpg';
import girlOnBeach from '../Pics/Landscapes/jpeg/girlOnBeach.jpg';
import floating from '../Pics/Landscapes/jpeg/floating.jpg';
import candles from '../Pics/Landscapes/jpeg/candles.jpg';
import moonCrest from '../Pics/Landscapes/jpeg/moonCrest.jpg';
import purpleGeode from '../Pics/Landscapes/jpeg/purpleGeode.jpg';
import nightMoon from '../Pics/Landscapes/jpeg/nightMoon.jpg';
import purpleCrystals from '../Pics/Landscapes/jpeg/purpleCrystals.jpg';
import findSign from '../Pics/Landscapes/jpeg/findSign.jpg';

import mountainStar from '../Pics/Landscapes/jpeg/webbshow-mountainstar.jpg';
import starSpiral from '../Pics/Landscapes/jpeg/killian-eon-starspiral.jpg';
import starTree from '../Pics/Landscapes/jpeg/adrianlang-startree.jpg';
import northernlights from '../Pics/Landscapes/jpeg/tobiasbjorkli-northernlights.jpg';
import aurora from '../Pics/Landscapes/jpeg/tristan-pokornyi-aurora.jpg';

export function useRandomImageUrl() {
    const [selectedImage, setSelectedImage] = useState(null);
    const imageArray = useRef([diary, girlOnBeach, floating, moonCrest, nightMoon, purpleCrystals, findSign, candles, purpleGeode, mountainStar, starSpiral, starTree, northernlights, aurora]);
    const randomIndex = useRef(Math.floor(Math.random() * imageArray.current.length));

    useEffect(() => {
        if(!selectedImage) 
            setSelectedImage(imageArray.current[randomIndex.current]);

    }, [selectedImage])

    return selectedImage;
}