import react from 'react'
import "./index.css"
import { jsPDF } from "jspdf";

export default function PDF(props) {
    
    const gerarPdf = () => {
        const doc = new jsPDF("p", "px", "a4");

        doc.html(document.querySelector("#report"), {
            callback: function(pdf){
                pdf.save("teste.pdf")
            }
        });
    };

    return (
      <div id="report">
        <h5>Lista de Compras</h5>

        <br />

        <h6>Nome da Compra</h6>

        <table>
          <thead>
            <tr>
              <th scope="col">Produto</th>
              <th scope="col">Valor</th>
              <th scope="col">Qtd</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{"Camisa da Holanda".padEnd(40, ".")}</td>
              <td>{"120".padEnd(30, ".")}</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Bermuda Korea</td>
              <td>30</td>
              <td>2</td>
            </tr>

            <tr>
              <td>Conversor de vga para hdmi</td>
              <td>1</td>
              <td>41</td>
            </tr>
          </tbody>
        </table>

        <button onClick={gerarPdf} className="btn btn-success">
          Gerar PDF
        </button>
      </div>
    );
}