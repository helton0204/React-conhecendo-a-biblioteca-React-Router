import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( //aqui é o componente mãe de toda a aplicação
	<React.StrictMode>
		<AppRouter/>
	</React.StrictMode>
);


