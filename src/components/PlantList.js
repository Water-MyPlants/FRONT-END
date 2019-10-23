import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import ProfileCard from "./ProfileCard";
import PlantCard from "./PlantCard";
import UploadForm from './UploadForm'

import wall from '../assets/wall.jpeg'

export const PlantList = ({ errors, touched, values, status }) => {

  const plantList = [
    {
      username: 'robert',
      phoneNumber: "+1 (509)991-1965",
      password: 'password'
    },
    {
      username: 'jonny',
      phoneNumber: "+44 (209)801-1456",
      password: 'asdf'
    },
    {
      username: 'jill',
      phoneNumber: "+20 (242)164-1854",
      password: 'pass'
    }
  ];

  return (
    <>
      <ProfileStyle className="profile-form-wrapper">
        <ProfileCard />
        <PlantFormStyle className="add-plant-container">
          <h1>Add your plants here!</h1>
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
        </PlantFormStyle>
      </ProfileStyle>
      <PlantListStyle className="plant-list-container">
        <h1>Dont forget to water your plants!</h1>
        <div className='plant-grid'>
          {plantList
            ? plantList.map(plant => <PlantCard key={plant.id} plant={plant} />)
            : null}
        </div>
      </PlantListStyle>
    </>
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

const ProfileStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
background-image: linear-gradient(to bottom, #518999 0%,#CE96A6 100%);
max-width: 280px;
width: 28%;
.add-plant-container {
  display: flex;
  justify-content: center;
  height: 100%;
  form {
    width: 90%;
    margin: 5% auto 20%;
  }
  input {
    background: transparent;
    margin: 5% auto;
    width: 90%;
  }
  .add-btn{
    margin: 5% auto;
    width: 60%;
  }
}
.upload-container {
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 2% auto;
  button {
    margin: 3%;
  }
}
`;
const PlantFormStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
width: 100%;
h1 {
  text-align: center;
}
.form {
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 3px black;
  border-radius: 4px;
  label {
    margin: 2% 0 2% 5%;
    font-size: 1.6rem;
  }
  input {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid black;
  }
}

`;
const PlantListStyle = styled.section`
background-image: linear-gradient(to bottom, #99b272 25%, transparent 100%), url(${wall});
background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
display: flex;
flex-direction: column;
width: 100%;
.plant-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}
h1 {
  margin: 8% auto;
  font-size: 4rem;
}
`;