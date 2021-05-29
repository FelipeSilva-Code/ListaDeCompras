import React, { useState } from "react";
import PageDefault from "../../Components/PageDefault";
import { MyDiv } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus} from "@fortawesome/free-solid-svg-icons";
import Card from "../../Components/Card/index"
import MiniCard from "../../Components/MiniCard"
import { jsPDF } from "jspdf";

export default function ListaCompras() {

  const [total, setTotal] = useState(0)
  const [countItens, setCountItens] = useState(1)
 
  const add = <FontAwesomeIcon size="2x" icon={faPlus} />;
  
  
  //definir o código para o evento de click no botão gerar
   const gerar = () => {
    
      const resumo = document.querySelector(".l1");

      let prod = resumo.getElementsByTagName("input")[0].value;
      let valor = resumo.getElementsByTagName("input")[1].value;
      let qtd = resumo.getElementsByTagName("input")[2].value;
      let chkId = resumo.getElementsByTagName("input")[3].id;
      let valueChk = resumo.getElementsByTagName("input")[3].checked;
      resumo.getElementsByTagName("input")[3].style.display = "flex";
      let tot = countItens + 1

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
      resumo.getElementsByTagName("input")[3].id = chkId;
      resumo.getElementsByTagName("input")[3].checked = valueChk;
      resumo.getElementsByTagName("input")[3].style.display = "none";

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

    /*const gerarPdf = () => 
    {
      const doc = new jsPDF();

      const list = document.getElementsByTagName("ul")[0]
                           .getElementsByTagName("li");

      let text = "NOME DA COMPRA" + String.fromCharCode(13);
      let nomeProduto = "";
      let valor = 0;
      let qtd = 0;

      let length = list.length;

      for (let i = 0; i < length; i++) {
        nomeProduto = list[i].getElementsByTagName("input")[0].value;
        nomeProduto = nomeProduto.padEnd(30, "#")
       
        valor = list[i].getElementsByTagName("input")[1].value;

        qtd = list[i].getElementsByTagName("input")[2].value;
        qtd = qtd.toString().padStart(15, "$")
        text += nomeProduto + " " + valor + " " + qtd + String.fromCharCode(13);
        
      }

      text += "Valor Final: R$" + total
      doc.text(text, 20, 20);
      doc.save("ListaDeCompras.pdf");
      doc.
    }*/

    const gerarPdf = () => {
       const doc = new jsPDF();

       doc.html(<h2>Teste</h2>)
       doc.save("teste.pdf");
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

          <div id="teste">
           
          </div>
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

           <button onClick={gerarPdf} className="btn btn-success">
            Gerar PDF
          </button>

        </div>

      </MyDiv>
    </PageDefault>
  );
}
