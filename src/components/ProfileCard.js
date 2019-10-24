import React from 'react';
import waterLogo from '../assets/waterLogo.png';
import styled from 'styled-components'

const ProfileCard = () => {
    return (
        <ProfileCardStyle className='profile-container'>
            <img alt='profile thumbnail' src={waterLogo}/>
            <h3 className='profile-phone'>+1 (509)991-1865</h3>
            <h3 className='profile-password'>Nunya</h3>
        </ProfileCardStyle>
    );
};

export default ProfileCard;

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