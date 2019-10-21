import React from "react";
import PlantCard from "./PlantCard";
export default function PlantList() {
  return (
    <div className="plant-list-container">
      <h2>Dont forget to water your plants!</h2>
      {plantList
        ? plantList.map(plant => <PlantCard key={plant.id} plant={plant} />)
        : null}
    </div>
  );
}
