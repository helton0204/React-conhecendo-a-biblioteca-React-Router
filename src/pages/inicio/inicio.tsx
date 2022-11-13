import cardapio from 'data/cardapio.json'
import styles from './inicio.module.scss';
import stylesTema from 'styles/tema.module.scss'; 
import nossaCasa from 'assets/nossa_casa.png';
import {useNavigate} from 'react-router-dom'; //useNavigate serve para navegar entre as telas
import { Prato } from 'types/prato';

function Inicio(){
    let pratosRecomendados = [...cardapio] //...cardapio passa todos os itens do array cardapio para o novo array pratosRecomendados
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).slice(0, 4); //esse código pega 3 elementos do array de forma randômica

    const navigate = useNavigate(); 

    function redirecionarParaDetalhes(prato: Prato){
        //no arquivo routes.js tem uma rota com o caminho path='prato/:id'. Quando é passado esse caminho para o navigate, esse rota é acessada
        navigate(`/prato/${prato.id}`, {state: {prato}, replace: false}) //state recebe o valor e passa para o state do hook useLocation() de import {useLocation} from 'react-router-dom';
        //navigate(“/”, { replace: true }) A propriedade diz que queremos substituir a última rota do histórico do navegador por essa rota que passamos como primeiro parâmetro. Sendo assim, caso voltássemos na rota anterior, não iríamos para essa rota substituída.
    }

    return(
        <section>
            <h3 className={stylesTema.titulo}>
                Recomendações da cozinha
            </h3>
            <div className={styles.recomendados}>
                {pratosRecomendados.map(item => (
                    <div key={item.id} className={styles.recomendado}>
                        <div className={styles.recomendado__imagem}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button 
                            className={styles.recomendado__botao}
                            onClick={() => redirecionarParaDetalhes(item)}
                        >
                            Ver mais
                        </button>  
                    </div>
                ))}
            </div>
            <h3 className={stylesTema.titulo}>Nossa casa</h3>
            <div className={styles.nossaCasa}>
                <img src={nossaCasa} alt="Casa do Aluroni" />
                <div className={styles.nossaCasa__endereco}>
                    Rua Vergueiro, 3195 <br/><br/> Vila Mariana-SP
                </div>
            </div>
        </section>
    )
}
export default Inicio;