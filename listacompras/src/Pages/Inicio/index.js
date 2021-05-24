import React from 'react'
import PageDefault from "../../Components/PageDefault"
import {MyDiv} from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router';

export default function Inicio ()
{
    
const add = <FontAwesomeIcon size="3x" icon={faPlus} />;

const history = useHistory();

const irParaListaCompras = () => 
{
    history.push("/ListaDeCompras")    
}

    return (
      <PageDefault>
        <h2>Bem-Vindo a Lista de Compras</h2>

        <h5>Uma maneira fácil de organizar as suas futuras compras.</h5>

        <br />
        <MyDiv onClick={irParaListaCompras}>
          <h5>Começar</h5>
          {add}
        </MyDiv>
      </PageDefault>
    );
}