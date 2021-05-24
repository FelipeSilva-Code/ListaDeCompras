import React, { useState } from "react";
import PageDefault from "../../Components/PageDefault";
import { MyDiv } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Card from "../../Components/Card/index"
import MiniCard from "../../Components/MiniCard"

export default function ListaCompras() {

  const [total, setTotal] = useState(0)
  const [countItens, setCountItens] = useState(1)
 
  const add = <FontAwesomeIcon size="2x" icon={faPlus} />;
  
  //definir o código para o evento de click no botão gerar
   const gerar = () => {
    
      const resumo = document.querySelector(".l1");

      let prod = "";
      let valor = 0;
      let qtd = 0;
      
      prod = resumo.getElementsByTagName("input")[0].value;
      valor = resumo.getElementsByTagName("input")[1].value;
      qtd = resumo.getElementsByTagName("input")[2].value;
     
      for(let i = 0; i <= 2; i++)
      {    
        resumo.getElementsByTagName("input")[i].value = "";
      }
      
      
      //clonar os 3 divs
      let novoResumo = resumo.cloneNode(true); //true indica cópia profunda

      resumo.getElementsByTagName("input")[0].value = prod;
      resumo.getElementsByTagName("input")[1].value = valor;
      resumo.getElementsByTagName("input")[2].value = qtd;

      //inserir no fim por ordem cada um dos divs clonados
      resumo.parentNode.insertBefore(novoResumo, null);
      let tot = countItens + 1
      setCountItens(tot)
    };


    const calcular = () => {
      const list = document.getElementsByTagName("ul")[0]

      setTotal(0)

      let valorFinal = 0
      for (let i = 0; i < countItens; i++){
        const x = list.getElementsByTagName("li")[i];
        const valor = x.getElementsByTagName("input")[1].value;
        const qtd = x.getElementsByTagName("input")[2].value;
        let result = valor * qtd
        valorFinal = result + valorFinal
      }
       setTotal(valorFinal); 
    }
    

    /*
    function adicionarLi(teste) {
      var lista = document.getElementById("lista").innerHTML;
      console.log(lista)
      const listaAteOLi = lista.substring(0, lista.indexOf("</li>", 2))
      const none = "none"
      lista = lista + "<li type=" + none + ">" + listaAteOLi + "</li>";
      document.getElementById("lista").innerHTML = lista;
    }
    */

  return (
    <PageDefault>
      <MyDiv>
        <Card id="getText">
            <ul className="lista">
              <div className="l1 duplica">
                <li className="item" type="none">
                  <MiniCard className="teste" />
                </li>
              </div>
            </ul>   

          <div className="valorTotal">
            <h3>
              Valor Total: R$ {total}
            </h3>

             <button onClick={calcular} className="btn btn-primary">Calcular</button>
          </div>

          <div className="addNew" onClick={gerar}>
            {add} <h5>Adicionar novo item</h5>
          </div>
        </Card>
      </MyDiv>
    </PageDefault>
  );
}
