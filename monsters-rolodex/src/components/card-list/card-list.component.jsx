import React from 'react';
import './card-list.style.css'
import {Card} from '../card/card.componet'

list = []

//if props.searchField in monster, filter it to a list, then display the item


export const Cardlist = props => (
    <div className='card-list'>
    {props.monsters.map(monster => ( //props得到的是app.js里this.stste的input，然后把input，即monsters复数，map到一个个monster 单数，然后调取单个monster的id和name，再用card component来布局单个monster
        



          <Card key={monster.id} monster={monster}/>
          ))}
    </div>
)