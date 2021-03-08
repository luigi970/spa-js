import view from '../views/home.html';

export default () => {
	// const views = ``;

	const divElement = document.createElement('div');
	divElement.innerHTML = view;

	const btnClick = divElement.querySelector('#btnClick');
	btnClick.addEventListener('click', () => {
		alert('Hice click en el boton');
	});

	return divElement;
}