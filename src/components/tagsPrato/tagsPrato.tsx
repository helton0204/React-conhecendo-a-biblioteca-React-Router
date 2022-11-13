import { Prato } from 'types/prato';
import styles from './tagsPrato.module.scss';

function TagsPrato({category, size, serving, price} : Prato){
    return(
        <div className={styles.tags}>
			<div className={`${styles.tags__tipo} ${styles[`tags__tipo__${category.label.toLowerCase()}`]}`}>
				{category.label}
			</div>
			<div className={styles.tags__porcao}>
				{size} g
			</div>
			<div className={styles.tags__qtdpessoas}>
                Serve {serving} {serving === 1 ? 'pessoa' : 'pessoas'}
			</div>
			<div className={styles.tags__valor}>
                R${price.toFixed(2)}
			</div>
		</div>
    )
}
export default TagsPrato;