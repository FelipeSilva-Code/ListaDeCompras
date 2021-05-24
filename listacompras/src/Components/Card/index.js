import React from 'react'
import {MyCard} from "./style"
export default function Card (props)
{
    return(
        <MyCard>
            <input placeholder="Nome da compra" className="form-control nomeCompra"/>
            {props.children}
        </MyCard>
    )
}