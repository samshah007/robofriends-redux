import React from 'react';
import Card from './Card';


const cardlist = ({robots}) => {
    // To check ErrorBountry is working.
    /* if(true){
        throw new Error('NOOOOOO');
    } */
    const cardComponent = robots.map(user => {
        return <Card key={user.id} id={user.id} name={user.name} email={user.email}/>
    });
    return(
        <div>
            {cardComponent}
        </div>
    )
}
export default cardlist;