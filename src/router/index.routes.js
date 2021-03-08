import Home from '../controllers/index.controller';

let content = document.getElementById('root');

const router = (route) => {
	content.innerHTML = '';
	switch (route) {
		case '#/':
			content.appendChild(Home());
			break;
		case '#/home':
			content.appendChild(Home());
			break;
		case '#/products':
			console.log('Productos');
			break;
		case '#/posts':
			console.log('Publicaciones');
			break;
		default:
			console.log('Error 404');
			break;
	}
}
export {router};