import React from 'react'

import './Card-list.styles.css'
import Card from '../card/Card';

export const CardList = props => {

    return (
    <div className='card-list'>
        {
        props.monsters.map((monster)=>(
          <Card key={monster.id} monster={monster}/>
        ))
      } 
    </div>
    );
}