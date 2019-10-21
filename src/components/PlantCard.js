import React from "react";

const PlantCard = props => {
  const onEdit = e => {
    editingPlant(props.plant);
  };
  const onDelete = e => {
    deletePlant(props.plant.id);
  };
  return (
    <article className="plant-card">
      <h1>NickName: {props.id}</h1>
      <h2>Species: {props.species}</h2>
      <h3>h2o Frequency: {props.h2oFrequency}</h3>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </article>
  );
};

export default PlantCard;
//  - `id`: Integer
// - `nickname`: String
// - `species` : String
// - `h2oFrequency`: Type determined by implementation
// - `image`: optional
