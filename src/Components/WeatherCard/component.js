import React from 'react';
import styled from '@emotion/styled';

import Location from './Location';
import Icon from './Icon';
import Conditions from './Conditions';

const WeatherCard = (props) => {

    let highColour = 0;
    let lowColour = 0;
    let bg = null;
    
    if (props.temp > 12) // This is for hot weather
    {
        highColour = (1 - (props.temp - 12)/ 28) * 255;
        lowColour = highColour - 150;

        bg = `
            linear-gradient(
                to top, 
                rgb(255, ${highColour}, 0),
                rgb(255, ${lowColour}, 0)
            )
        `;
    }
    else if (props.temp <= 12) // This is for cold weather
    {
        highColour = (1 - (props.temp + 20)/ 32) * 255;
        lowColour = highColour - 150;
        
        bg = `
            linear-gradient(
                to top, 
                rgb(0, ${highColour}, 255),
                rgb(0, ${lowColour}, 255)
            )
         `;
    }

    const Card = styled.div`
        margin: 0 auto;
        background: ${bg};
        width: 200px;
        height: 240px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 15px;
    `

    return (  
        <Card>
            <Location />
            <Icon />
            <Conditions />

        </Card>
    );
}
 
export default WeatherCard;