import Footer from 'components/footer/footer';
import Menu from 'components/menu/menu';
import PaginaPadrao from 'components/paginaPadrao/paginaPadrao';
import Cardapio from 'pages/cardapio/cardapio';
import Inicio from 'pages/inicio/inicio';
import NotFound from 'pages/notFound/notFound';
import Prato from 'pages/prato/prato';
import Sobre from 'pages/sobre/sobre';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function AppRouter(){
    return(
        <main className='container'>
            <Router>
                <Menu/>
                <Routes>
                    <Route path='/' element={<PaginaPadrao/>}> {/*o componente PaginaPadrao é renderizado e o componente Inicio é renderizado como filho do componente PaginaPadrao através do Outlet declarado no PaginaPadrao*/}
                        <Route index element={<Inicio/>}/> {/*index significa que se o path for '/' vai ser renderizado o componente <Inicio/> se não vai ser renderizado o componente cardapio */}
                        <Route path='cardapio' element={<Cardapio/>}/> {/*observe que não tem o / no path cardapio, isso acontece porque o path é relativo, ou seja, parte do path / declarado na route pai */}
                        <Route path='sobre' element={<Sobre/>}/>  
                    </Route>
                    <Route path='prato/:id' element={<Prato/>}/> {/*observe que o caminho path='prato/:id', :id significa que qualquer caminho depois de prato/ vai cair nessa rota, e o que foi digitado depois de prato/ fica armazenado no id e pode ser acessado pelo hook useParams e useLocation from react-router-dom */}
                    <Route path='*' element={<NotFound/>}/> {/*path='*' significa qualquer outro caminho que não seja as três rotas acima*/}
                </Routes>
                <Footer/>
            </Router>
        </main>
    )
}
export default AppRouter;