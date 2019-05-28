import React from 'react';
import './Button.scss';

const ButtonContainer = (props) => {
    return (
        <div className={`button-container ${props.className}`}>
            {props.children}
        </div>
    );
};

export default ButtonContainer;
