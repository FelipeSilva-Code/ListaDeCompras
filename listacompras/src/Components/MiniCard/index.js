import React from 'react'
import {MyMiniCard} from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function MiniCard (props) 
{
    const trash = <FontAwesomeIcon size="2x" icon={faTrashAlt} />;

  

    return(
    <MyMiniCard id="1">
        <input className="form-control nome" placeholder="Nome do Produto" />
        <input type="number" className="form-control valor" placeholder="Valor" />
        <input type="number" className="form-control quantidade" placeholder="Qtd"/>
        
       {props.children}
        
    </MyMiniCard>
    )
}