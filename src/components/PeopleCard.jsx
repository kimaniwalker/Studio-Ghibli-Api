import React from 'react';

const PeopleCard = props => {
    return (
      <div className="card bg-light m-4 rounded-0 shadow">
        <div className="card-header bg-success text-white rounded-0 shadow bottom-0">
          Name: {props.data.name}
        </div>
        <div className="card-body shadow">
          <h5 className="card-title rounded-0 ">Gender: {props.data.gender}</h5>
          <h5 className="card-title rounded-0 ">Age: {props.data.age}</h5>
          <h5 className="card-title rounded-0 ">Eye Color: {props.data.eye_color}</h5>
          <h5 className="card-title rounded-0 ">Hair Color: {props.data.hair_color}</h5>
          <h5 className="card-title rounded-0 ">Films: {props.data.films}</h5>
          <h5 className="card-title rounded-0 ">Species: {props.data.species}</h5>
          <h5 className="card-title rounded-0 ">URL: {props.data.url}</h5>

        </div>
      </div>
    );
  };
  
  export default PeopleCard;