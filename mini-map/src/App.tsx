import React from "react"
import type { Place } from "./api/place";
import Map from "./components/Map";
import LocationSerach from "./components/LocationSearch";
import { useState } from "react";




function App() {
  
  const [place, setPlace] = useState<Place | null>(null);

  return (
    <div className="h-screen w-screen grid grid-cols-12">
      <div className=" col-span-3 p-2">
        <LocationSerach />
      </div>
      
      <div className="col-span-9">

        <Map  place={place}/>

      </div>


    </div>
  )

}

export default App
