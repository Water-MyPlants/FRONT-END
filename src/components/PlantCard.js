import React from "react";
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';


const PlantCard = ({ plant, startEditPlant, deletePlant }) => {
  const onEdit = e => {
    startEditPlant(plant);
  };
  const onDelete = e => {
    deletePlant(plant.id);
  };
  return (
    <article className="plant-card">
      <h1>NickName: {plant.id}</h1>
      <h2>Species: {plant.species}</h2>
      <h3>h2o Frequency: {plant.h2oFrequency}</h3>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </article>
  );
};

export default connect(state => state, actionCreators)(PlantCard);
