//import logo from '../../assets/logo.svg'; //importa uma imagem como tipo de arquivo imagem
import {ReactComponent as Logo} from 'assets/logo.svg'; //esse comando converte um arquivo svg em um componente react
import styles from './menu.module.scss';
import {Link} from 'react-router-dom';

function Menu(){
    const rotas = [
        {label: 'Início', to: '/'},
        {label: 'Cardápio', to: '/cardapio'}, 
        {label: 'Sobre', to: '/sobre'}
    ];
    return(
        <nav className={styles.menu}>
				<Logo />
                <ul className={styles.menu__list}>
                    {rotas.map((rota, index) => (
                        <li key={index} className={styles.menu__link}>
                            <Link to={rota.to}>{rota.label}</Link> {/*possui a mesma função da tag a, porém ele não irá atualizar a página se apenas alternar entre as rotas de forma correta. Esse componente requer uma propriedade chamada to que deve ser passada como valor a rota.*/}
                        </li>
                    ))}
                </ul>
		</nav>
    )
}
export default Menu;