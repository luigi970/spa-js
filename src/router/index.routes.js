import {pages} from '../controllers/index';

let content = document.getElementById('root');

const router = async (route) => {
	content.innerHTML = '';
	switch (route) {
		case '#/':
			content.appendChild(pages.home());
			break;
		case '#/home':
			content.appendChild(pages.home());
			break;
		case '#/products':
			content.appendChild(pages.products());
			break;
		case '#/posts':
			content.appendChild(await pages.posts());
			break;
		default:
			content.appendChild(pages.notFund());
			break;
	}
}
export {router};