import React from 'react';
import { connect } from "react-redux";
import styled from 'styled-components'
import * as actionCreators from '../state/actionCreators';

import waterLogo from '../assets/waterLogo.png';

const ProfileCard = ({ user, username, phoneNumber }) => {

    // const onUserEdit = e => {
    //     e.preventDefault();
    //     editUser(user)
    // }
    return (
        <ProfileCardStyle className='profile-container'>
            <img alt='profile thumbnail' src={waterLogo}/>
            <h3 className='profile-username'>{username}</h3>
            <h3 className='profile-phonenumber'>{phoneNumber}</h3>
            {/* <button onclick={onUserEdit}>Edit</button> */}
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
    border-radius: 12px;
    margin: 25% auto 10%;
    max-width: 80%;
    max-height: 50vh;
}
h3 {
    margin: 3%;
    font-size: 1.6rem;
}
`;