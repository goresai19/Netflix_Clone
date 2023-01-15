import React from "react";
import Card from "./Card";


function Netcards(val){
    return(
   
    <Card 
    key={val.id}
    Movielink={val.Movielink}
    Imgsrc={val.Imgsrc}
    Alternativename={val.Alternativename}
    Moviename={val.Moviename}
    Subtag={val.Subtag}
    />
    
    )
 };

export default Netcards;