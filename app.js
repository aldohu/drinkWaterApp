const liters = document.querySelector('.liters');

const percent = document.querySelector('.percent');

const glass = document.querySelectorAll('.glass');

const bottleParagraph = document.getElementById('bottle-paragraph');

const bottleHeading = document.getElementById('bottle-heading');

glass.forEach((glass, index) => {
	glass.addEventListener('click', (e) => {
		console.log('I am clicked' + e.target.tagName);
		console.log(index);
		fillGlass(index);
	});
});

const fillGlass = (index) => {
	if (glass[index].classList.contains('full')) {
		for (let i = index; i < glass.length; i++) {
			glass[i].classList.remove('full');
		}
	}
	glass[index].classList.add('full');

	for (let i = 0; i < index; i++) {
		glass[i].classList.add('full');
	}
	const full = document.querySelectorAll('.full').length;
	const total = glass.length;
	const percentHeight = (full / total) * 100;

	// Set the height of the percent element to the calculated percentage height
	percent.style.height = `${percentHeight}vh`;

	// Set the height of the liters element to the remaining percentage height
	liters.style.height = `${100 - percentHeight}vh`;
	liters.style.background = 'rgb(17, 112, 237)';
	liters.style.color = 'white';
	bottleHeading.style.top = '0px';
	bottleParagraph.style.top = '40%';
	bottleHeading.style.color = '';
	bottleParagraph.textContent = `${2 * 1000 - 250 * full}L`;
	bottleHeading.textContent = '';
	percent.textContent = `${percentHeight}%`;
};
