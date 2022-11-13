import styles from './paginaPadrao.module.scss';
import {Outlet} from 'react-router-dom'; //Outlet é o props.children do react-router-dom
import stylesTema from 'styles/tema.module.scss'; 
import React from 'react';

function PaginaPadrao({children}: {children?: React.ReactNode}){
    return(
        <>
            <header className={styles.header}>
                <div className={styles.header__text}> {/*o nome da classe header__text significa que tem um text dentro do header */}
                    A casa do código e da massa
                </div>
            </header>
            <div className={stylesTema.container}>
                <Outlet/> {/*Outlet é o props.children do react-router-dom. Rotas dentro da rota do componente PaginaPadrao irão ser renderizadas aqui*/}
                {children} {/*Sempre que o componente PaginaPadrao for chamado, o que for declarado dentro desse componente vai ser renderizado aqui*/}
            </div>
        </>
    )
}
export default PaginaPadrao;