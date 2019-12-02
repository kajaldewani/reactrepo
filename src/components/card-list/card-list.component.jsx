import React from 'react';
import "./card-list.styles.scss";
import {Card} from "../card/card.component";

export const CardList = (props) => {
    return (
        <div className="card-wrapper">
            {
                props.users.map(user => (
                    <Card key={user.id} user={user}></Card>
                ))
            }
        </div>
    )  
};