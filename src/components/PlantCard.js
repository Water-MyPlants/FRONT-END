import React from "react";

const PlantCard = ({ plant, editingPlant, deletePlant }) => {
  const onEdit = e => {
    editingPlant(plant);
  };
  const onDelete = e => {
    deletePlant(plant.id);
  };
  return (
    <article className="plant-card">
      <img>{plant.image}</img>
      <h1>NickName: {plant.id}</h1>
      <h2>Species: {plant.species}</h2>
      <h3>h2o Frequency: {plant.h2oFrequency}</h3>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </article>
  );
};

export default PlantCard;
