import React from "react";
import styled from 'styled-components';
import grass from '../assets/grass.jpeg';
import flower from '../assets/flower.jpeg';


const PlantCard = ({ plant, editingPlant, deletePlant }) => {
  const onEdit = e => {
    editingPlant(plant);
  };
  const onDelete = e => {
    deletePlant(plant.id);
  };
  return (
    <PlantCardStyle className="plant-card">
      <div className='plant-img' />
      <h2>NickName: {plant.id}</h2>
      <h2>Species: {plant.species}</h2>
      <h2>h2o Frequency: {plant.h2oFrequency}</h2>
      <div className='btn-container'>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
      </div>
    </PlantCardStyle>
  );
};

export default PlantCard;

const PlantCardStyle = styled.article`
  background-image: url(${grass});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 2px 3px 5px black;
  border-radius: 12px;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items; center;
  padding: 3% 3% 0;
  margin: 3%;
  width: 300px;
  max-width: 25%;
  .btn-container {
    display: flex;
    height: 100%;
  }
  .plant-img {
    margin: 0 auto;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    max-width: 100%;
    background-image: url(${flower});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;