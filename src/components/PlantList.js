import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as withAuth from "../helpers/axiosWithAuth";
import * as actionCreators from "../state/actionCreators";
import PlantCard from "./PlantCard";

export const PlantList = props => {
  const {
    isLoading,
    plantsList,
    addPlant,
    getPlantsList,
    onPlantsInputChange,
    addPlantToList,
    editPlant
  } = props;

  useEffect(() => {
    getPlantsList();
    return () => {};
  }, []);

  const onInputChange = e => {
    onPlantsInputChange(e.target);
  };
  
  const onSubmitPlant = e => {
    e.preventDefault();
    addPlant.id === null ? addPlantToList(addPlant) : editPlant(addPlant);
  };
  return withAuth.isLoggedIn() && isLoading ? (
    <div className="wrapper">Loading list of plants...</div>
  ) : !isLoading ? (
    <div className="plant-list-container">
      <h1>List of plants</h1>
      {plantsList
        ? plantsList.map(plant => <PlantCard key={plant.id} plant={plant} />)
        : null}
      <h1>Add a plant</h1>
      <form className = "form" onSubmit={onSubmitPlant}>
        <label htmlFor="nickname">Nickname:</label>
        <input
          id="nickname"
          name="nickname"
          type="text"
          value={addPlant.nickname}
          onChange={onInputChange}
        />
        <label htmlFor="species">Species:</label>
        <input
          id="species"
          name="species"
          type="text"
          value={addPlant.species}
          onChange={onInputChange}
        />
        <label htmlFor="h2oFrequency">H2O Frequency:</label>
        <input
          id="h2oFrequency"
          name="h2oFrequency"
          type="h2oFrequency"
          value={addPlant.h2oFrequency}
          onChange={onInputChange}
        />
        <button className="add-btn" type="submit">Submit</button>
      </form>
    </div>
  ) : null;
};

export default connect(
  state => state,
  actionCreators
)(PlantList);

// import React from "react";
// import { Form, Field, withFormik } from "formik";
// import * as Yup from "yup";

// import PlantCard from "./PlantCard";

// export const PlantList = ({ errors, touched, values, status }) => {
//   return (
//     <div className="wrapper">
//       <div className="plant-list-container">
//         <h2>Dont forget to water your plants!</h2>
//         {/* {plantList
//           ? plantList.map(plant => <PlantCard key={plant.id} plant={plant} />)
//           : null} */}
//       </div>
//       <div className="add-plant-container">
//         <Form className="form">
//           <label>Nick Name:</label>
//           <Field type="text" name="nickName" placeholder="Nick Name" />
//           {touched.nickName && errors.nickName && (
//             <span className="error">{errors.nickName}</span>
//           )}
//           <label>Species:</label>
//           <Field type="text" name="species" placeholder="Plant Species" />
//           {touched.species && errors.species && (
//             <span className="error">{errors.species}</span>
//           )}
//           <label>H2O Frequency:</label>
//           <Field type="text" name="h2oFrequency" placeholder="H20 Frequency" />
//           {touched.h2oFrequency && errors.h2oFrequency && (
//             <span className="error">{errors.h2oFrequency}</span>
//           )}
//           <button className="add-btn" type="submit">
//             ADD PLANT
//           </button>
//         </Form>
//       </div>
//     </div>
//   );
// };

// const FormikPlantForm = withFormik({
//   mapPropsToValues({ nickName, species, h2oFrequency }) {
//     return {
//       nickName: nickName || "",
//       species: species || "",
//       h2oFrequency: h2oFrequency || ""
//     };
//   },

//   validationSchema: Yup.object().shape({
//     NickName: Yup.string().required("Enter a name for your plant"),
//     species: Yup.string().required("What species is your plant"),
//     h2oFrequency: Yup.string().required("Dont forget to water your plant!")
//   })
// })(PlantList);
// //!!! withFormik validation and Yup Error Messages //
// export default FormikPlantForm;
