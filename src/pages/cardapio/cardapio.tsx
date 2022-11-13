import styles from './cardapio.module.scss';
import stylesTema from 'styles/tema.module.scss'; 
import Buscador from './buscador/buscador';
import { useState } from 'react';
import Filtros from './filtros/filtros';
import Ordenador from './ordenador/ordenador';
import Itens from './itens/itens';
//observe que o caminho do import da logo é dado a partir da pasta src devido a adição do "baseUrl": "src" no arquivo tsconfig.jason

function Cardapio(){
	const [busca, setBusca] = useState('');
	const [filtro, setFiltro] = useState<number | null>(null);
	const [ordenador, setOrdenador] = useState('');

	return(
		<section className={styles.cardapio}>
			<h3 className={stylesTema.titulo}>Cardápio</h3>
			<Buscador busca={busca} setBusca={setBusca}/> 
			<div className={styles.cardapio__filtros}>
				<Filtros filtro={filtro} setFiltro={setFiltro}/>
				<Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
				<Itens busca={busca} filtro={filtro} ordenador={ordenador}/>
			</div>
		</section> 
	);
}
export default Cardapio;