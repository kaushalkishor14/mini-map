import React from "react";
import type { Place } from "../api/place";

interface MapProps{
    place: Place | null;
}



export default function Map({place}:MapProps){
    return <div> map</div>
}