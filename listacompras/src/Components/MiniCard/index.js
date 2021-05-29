import React from 'react'
import {MyMiniCard} from "./style"

export default function MiniCard (props) 
{
    return(
    <MyMiniCard id="1">
        <input className="form-control nome" placeholder="Nome do Produto" />
        <input type="number" className="form-control valor" placeholder="Valor" />
        <input type="number" className="form-control quantidade" placeholder="Qtd"/>
        
       {props.children}
        
    </MyMiniCard>
    )
}