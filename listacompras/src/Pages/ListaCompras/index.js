import React, { useState } from "react";
import PageDefault from "../../Components/PageDefault";
import { MyDiv } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Card from "../../Components/Card/index"
import MiniCard from "../../Components/MiniCard"

export default function ListaCompras() {

  const [total, setTotal] = useState(0)
  const [countItens, setCountItens] = useState(1)
 
  const trash = <FontAwesomeIcon size="2x" icon={faTrashAlt} />;
  const add = <FontAwesomeIcon size="2x" icon={faPlus} />;
  
  
  //definir o código para o evento de click no botão gerar
   const gerar = () => {
    
      const resumo = document.querySelector(".l1");

      let prod = "";
      let valor = 0;
      let qtd = 0;
      let id = 0;
      let className = "";
      let chkId = "";
      let valueChk = false;

      prod = resumo.getElementsByTagName("input")[0].value;
      valor = resumo.getElementsByTagName("input")[1].value;
      qtd = resumo.getElementsByTagName("input")[2].value;
      id = resumo.getElementsByTagName("div")[0].id;
      className = resumo.className;
      chkId = resumo.getElementsByTagName("input")[3].id;
      valueChk = resumo.getElementsByTagName("input")[3].checked;
      resumo.getElementsByTagName("input")[3].style.display = "flex";
      let tot = countItens + 1
      
      resumo.getElementsByTagName("div")[0].id = tot;
      resumo.className = className.substring(0, 10) + " " + tot;

      resumo.getElementsByTagName("input")[3].id = tot;
     
      
      for(let i = 0; i <= 2; i++)
      {    
        resumo.getElementsByTagName("input")[i].value = "";
      }
      
      resumo.getElementsByTagName("input")[3].checked = false;
      //clonar os 3 divs
      let novoResumo = resumo.cloneNode(true); //true indica cópia profunda
      
      resumo.getElementsByTagName("input")[0].value = prod;
      resumo.getElementsByTagName("input")[1].value = valor;
      resumo.getElementsByTagName("input")[2].value = qtd;
      resumo.getElementsByTagName("div")[0].id = id;
      resumo.getElementsByTagName("input")[3].id = chkId;
      resumo.getElementsByTagName("input")[3].checked = valueChk;
      resumo.getElementsByTagName("input")[3].style.display = "none";
      resumo.className = className

      //inserir no fim por ordem cada um dos divs clonados
     
      //addNewEventListener(novoResumo)
      resumo.parentNode.insertBefore(novoResumo, null);
      setCountItens(tot)
    };

    function delParagrafo() {
      
      const list = document.getElementsByTagName("ul")[0]
                           .getElementsByTagName("li");
     
      let length = list.length;
      var node = "";

      for (let i = length - 1; i > 0; i--) {
        if (list[i] === undefined)
          continue;
       
        if(list[i].getElementsByTagName("input")[3].checked)
        {
          node = list[i];

          if(node.parentNode) {
            node.parentNode.removeChild(node);
          }
        }
        
      }

      let tot = countItens
      setCountItens(tot - 1)
      console.log("chegou aqui");
    }
     
  

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

  return (
    <PageDefault>
      <MyDiv>
        <Card id="getText">
          <ul className="lista">
            <div className="l1 duplica 1">
              <li className="item" type="none">
                <MiniCard>
                  <input id="1" className="form-control chk" type="checkbox" />
                </MiniCard>
              </li>
            </div>
          </ul>

          <div className="valorTotal">
            <h3>Valor Total: R$ {total}</h3>

            <button onClick={calcular} className="btn btn-primary">
              Calcular
            </button>
          </div>

          <div className="addNew" onClick={gerar}>
            {add} <h5>Adicionar novo item</h5>
          </div>
        </Card>

        <div className="remover">
          <button onClick={delParagrafo} className="btn btn-danger">
            Deletar
          </button>
        </div>

      </MyDiv>
    </PageDefault>
  );
}
