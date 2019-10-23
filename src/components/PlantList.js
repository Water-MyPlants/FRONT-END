import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import ProfileCard from "./ProfileCard";
import PlantCard from "./PlantCard";
import UploadForm from './UploadForm'

export const PlantList = ({ errors, touched, values, status }) => {

  return (
    <PlantListStyle className="plant-list-wrapper">
        <ProfileCard />
        <div className="add-plant-container">
          <Form className="form">
            <label>Nick Name:</label>
            <Field type="text" name="nickName" placeholder="Nick Name" />
            {touched.nickName && errors.nickName && (
              <span className="error">{errors.nickName}</span>
            )}
            <label>Species:</label>
            <Field type="text" name="species" placeholder="Species" />
            {touched.species && errors.species && (
              <span className="error">{errors.species}</span>
            )}
            <label>H2O Frequency:</label>
            <Field type="text" name="h2oFrequency" placeholder="H20 Frequency" />
            {touched.h2oFrequency && errors.h2oFrequency && (
              <span className="error">{errors.h2oFrequency}</span>
            )}
            <button className="add-btn" type="submit">
              ADD PLANT
            </button>
          </Form>
          <UploadForm />
        </div>
      <div className="plant-list-container">
        <h2>Dont forget to water your plants!</h2>
        {/* {plantList
          ? plantList.map(plant => <PlantCard key={plant.id} plant={plant} />)
          : null} */}
      </div>
    </PlantListStyle>
  );
};

const FormikPlantForm = withFormik({
  mapPropsToValues({ nickName, species, h2oFrequency, image }) {
    return {
      nickName: nickName || "",
      species: species || "",
      h2oFrequency: h2oFrequency || "",
      image: image || ""
    };
  },

  validationSchema: Yup.object().shape({
    NickName: Yup.string().required("Enter a name for your plant"),
    species: Yup.string().required("What species is your plant"),
    h2oFrequency: Yup.string().required("Dont forget to water your plant!")
  })
})(PlantList);
//!!! withFormik validation and Yup Error Messages //
export default FormikPlantForm;

const PlantListStyle = styled.div`
display: flex;
background: white;
width: 100%;
.add-plant-container {
  border: 1px solid black;
  width: 600px;
}
`;