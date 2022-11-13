import styles from './notFound.module.scss';
import stylesTema from 'styles/tema.module.scss';
import {ReactComponent as NotFoundImage} from 'assets/not_found.svg';
import {useNavigate} from "react-router-dom";

function NotFound(){
    const navigate = useNavigate();
    return(
        <div className={`${styles.container} ${stylesTema.container}`}>
            <div className={styles.voltar}>
                <button onClick = {() => navigate(-1)}> {/*navigate(-1) significa voltar para a tela anterior*/}
                    {'< Voltar'}
                </button>
            </div>
            <NotFoundImage/>
        </div>
    )
}
export default NotFound;