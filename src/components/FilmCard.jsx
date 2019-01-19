import React from 'react';

const FilmCard = props => {
    return (
      <div className="card bg-light m-4 rounded-0 shadow">
        <div className="card-header bg-dark text-white rounded-0 shadow bottom-0">
          Tile: {props.data.title}
        </div>
        <div className="card-body shadow">
          <h5 className="card-title rounded-0 ">Description: {props.data.description}</h5>
          <h5 className="card-title rounded-0 ">Director: {props.data.director}</h5>
          <h5 className="card-title rounded-0 ">Producer: {props.data.producer}</h5>
          <h5 className="card-title rounded-0 ">Release Date: {props.data.release_date}</h5>
          <h5 className="card-title rounded-0 ">Avg Rating: {props.data.rt_score}</h5>
        </div>
      </div>
    );
  };
  
  export default FilmCard;