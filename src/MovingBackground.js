import React from 'react';
import './MovingBackground.scss';
import './MovingBackground2.scss';

export const MovingBackground = () => {
    return <div class="wrapper">
        <div class="snow layer1 a"></div>
        <div class="snow layer1"></div>
        <div class="snow layer2 a"></div>
        <div class="snow layer2"></div>
        <div class="snow layer3 a"></div>
        <div class="snow layer3"></div>
    </div>
};

export const MovingBackground2 = () => {
    return <div class="snowflake"></div>;
}