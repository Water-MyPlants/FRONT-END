import React from 'react';
import { connect } from "react-redux";
import profileImg from '../assets/profile-img.jpg';
import styled from 'styled-components'
import * as actionCreators from '../state/actionCreators';

const ProfileCard = ({ user, username, phoneNumber }) => {

    // const onUserEdit = e => {
    //     e.preventDefault();
    //     editUser(user)
    // }
    return (
        <ProfileCardStyle className='profile-container'>
            <img alt='profile thumbnail' src={profileImg}/>
            <h3 className='profile-username'>User{username}</h3>
            <h3 className='profile-phonenumber'>Phone{phoneNumber}</h3>
            {/* <button onclick={onUserEdit}>Edit</button> */}
            <input type="text" name="username"/>
        </ProfileCardStyle>
    );
};

export default connect(
    state => state,
    actionCreators
  )(ProfileCard);
  

const ProfileCardStyle = styled.aside`
display: flex;
justify-content: center;
flex-direction: column;
max-width: 100%;
max-height: 50vh;
text-align: center;
img {
    border-radius: 50%;
    margin: 25% auto 10%;
    max-width: 80%;
    max-height: 50vh;
}
h3 {
    margin: 3%;
    font-size: 1.6rem;
}
`;