import {ProdutosStyle} from "../css/ProdutosStyle"

const Produto=()=>{
    return(
        <ProdutosStyle>
        <div>
            <h1>Produtos</h1>
            <div className='cards'>
            
            <td>
                <fieldset>
                <img src="src/assets/produto3.jpg" className="card1" width="200px"/>
                    <legend>Bicicleta</legend>
                <h4>Bicicleta Ergométrica Kikos Kr5.6 Eletromagnética</h4>
                <h5>De: R$5.032,00</h5>
                </fieldset>
            </td>
            <td>
                <fieldset>
                <img src="src/assets/produto2.jpg" className="card1" width="200px"/>
                    <legend>Esteira</legend>
                <h4>Esteira Ergométrica Kikos Ks2202I 2.5 HP 16Km/H</h4>
                <h5>De: R$8.792,00</h5>
                </fieldset>
            </td>
            <td>
                <fieldset>
                <img src="src/assets/produto4.jpg" className="card1" width="200px"/>
                    <legend>Estação De Musculação</legend>
                <h4>Estação De Musculação Kikos 518Ex Torre 96kg</h4>
                <h5>De: R$13.272,00</h5>
                </fieldset>
            </td>
            <td>
                <fieldset>
                <img src="src/assets/produto5.jpg" className="card1" width="200px"/>
                    <legend>Bicicleta</legend>
                <h4>Bicicleta Ergométrica Kikos Kv6.2 Magnética</h4>
                <h5>De: R$2.386,56</h5>
                </fieldset>
            </td>
            <td>
                <fieldset>
                <img src="src/assets/produto6.jpg" className="card1" width="200px"/>
                    <legend>Remo Kikos</legend>
                <h4>Remo Kikos Wr100 Eletromagnético 16 Níveis de Tensão</h4>
                <h5>De: R$7.912,00</h5>
                </fieldset>
            </td>
            <td>
                <fieldset>
                <img src="src/assets/produto7.jpg" className="card1" width="200px"/>
                    <legend>Bicileta</legend>
                <h4>Bicicleta Spinning Kikos Pro F13 Roda de Inércia 16Kg</h4>
                <h5>De: R$14.806,88</h5>
                </fieldset>
            </td>
            <td>
                <fieldset>
                <img src="src/assets/primeiroproduto.webp" className="card1" width="200px"/>
                    <legend>Par de alter</legend>
                <h4>Par De Halter Bola Pintado 07kg Megagym Treinos Funcionais C Cor Preto</h4>
                <h5>De: R$ 254,90</h5>
                </fieldset>
            </td>
                
            </div>
        </div>
        </ProdutosStyle>
    )
}
export default Produto

