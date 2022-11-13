import styles from './prato.module.scss';
import {useParams, useNavigate} from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import TagsPrato from 'components/tagsPrato/tagsPrato';
import NotFound from 'pages/notFound/notFound';
import PaginaPadrao from 'components/paginaPadrao/paginaPadrao';

function Prato(){
    const {id} = useParams(); //vai pegar o valor do path depois do /prato/
    const navigate = useNavigate();
    const prato = cardapio.find(item => item.id === Number(id)) //o método find retorna o primeiro elemento de um array que satisfaz uma determinada condição
    if(!prato){
        return <NotFound/>; //Uma outra forma de chegar nesse componente seria return <Navigate to="caminho_do_NotFound" />
    }
    return(
        <PaginaPadrao>
            <button className={styles.voltar} onClick={() => navigate(-1)}> {/*navigate(-1) direciona a página para o componente anterior a página atual*/}
                {'< Voltar'}
            </button>
            <section className={styles.container}>
                <h1 className={styles.titulo}>
                    {prato.title}
                </h1>
                <div className={styles.image}>
                    <img src={prato.photo} alt={prato.title} />
                </div>
                <div className={styles.conteudo}>
                    <p className={styles.conteudo__descricao}>
                        {prato.description}
                    </p>
                    <TagsPrato {...prato}/>
                </div>
            </section>
        </PaginaPadrao>
    )
}
export default Prato;