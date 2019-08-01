import React from 'react';
import Card from './Card';

//STATE -> description of the app (an object that describes the application)
// Props -> comes out of state

const Cardlist = ({ cats }) => {

   
    return (
        <div>
        {
            cats.map((user, i) => {
        return (
        <Card 
        key={i} 
        id={cats[i].id} 
        name={cats[i].name} 
        email={cats[i].email}

        />
        );
    })
        }
    </div>
    );
}

export default Cardlist;