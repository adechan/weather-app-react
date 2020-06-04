import React from 'react';
import styled from '@emotion/styled';

const Icon = (props) => {

    const Container = styled.div`
        text-align: center;
    `
    const IconImg = styled.img`
        width: 40%;
    `
    
    return (  
        <Container>
            <a title = "Icon made by Freepik from www.flaticon.com" href = "https://www.flaticon.com/authors/freepik">
                <IconImg src = "./img/cloudy.png" alt = "Weather Icon" />
            </a>
        </Container>
    );
}
 
export default Icon;