import React from 'react';
import "./card.styles.scss";

export const Card = (props) => {
    return (
        <div className="card-list">
            <div className="card-text">
                <h1>{props.user.name}</h1>
                <h3>{props.user.email}</h3>
            </div>
        </div>
    ) 
};