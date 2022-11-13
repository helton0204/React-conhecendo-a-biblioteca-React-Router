import TagsPrato from 'components/tagsPrato/tagsPrato';
import { useNavigate } from 'react-router-dom';
import styles from './item.module.scss';

interface ItemProps{
    title: string;
    description: string;
    photo: string;
    size: number;
    serving: number;
    price: number;
    id: number;
    category: {id: number, label: string};
}

function Item(props: ItemProps){
	const {title, description, photo, id} = props; 
	const navigate = useNavigate();

	return(
		<div className={styles.item} onClick={() => navigate(`/prato/${id}`)}> {/*useNavigate() direciona para um certo componente através do seu caminho*/}
			<div className={styles.item__image}>
				<img src={photo} alt={title} /> {/*para renderizar imagens de forma dinâmica, as imagens devem estar dentro da pasta public e o caminho da imagem deve ser relativo à pasta public..*/}
			</div>
			<div className={styles.item__descricao}>
				<div className={styles.item__titulo}>
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
				<TagsPrato {...props}/>
			</div>
		</div>
	);
}
export default Item;