import React from "react";



function Card(Props){
    return(
    <div className="content">

        <div className="column">
        <div className="card">
        <a href={Props.Movielink}>
          <img src={Props.Imgsrc} alt={Props.AlternativeName} className="image"
           
          />
          </a>
          <div className="Card-Title">
            <h2>{Props.Moviename}</h2>
          </div>
          <div className="card-category">
            <h4>{Props.Subtag}</h4>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Card;





