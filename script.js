const swiperItems = [
	{
		id: 0,
		authorSrc: './img/logo.jpeg',
		authorName: 'Lorem, ipsum dolor.',
		authorPosition: 'Lorem ipsum dolor sit amet.',
		subComment:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nihil velit debitis neque omnis hic totam a',
		comment:
			'"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nihil velit debitis neque omnis hic totam a."',
	},
	{
		id: 1,
		authorSrc: './img/man.jpg',
		authorName: 'ipsum dolor',
		authorPosition: 'ipsum dolor',
		subComment:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nihil velit debitis neque omnis hic totam a',
		comment:
			'"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nihil velit debitis neque omnis hic totam a.',
	},
	{
		id: 2,
		authorSrc: './img/man.jpg',
		authorName: 'ipsum dolor',
		authorPosition: 'ipsum dolor ipsum dolor',
		subComment: '',
		comment: '"orem ipsum dolor sit amet consectetur adipisicing elit. C"',
	},
];

const prevButton = document.querySelector('.swipe__prev');
const nextButton = document.querySelector('.swipe__next');

prevButton.addEventListener('click', () => switchSwiperItem('prev'));
nextButton.addEventListener('click', () => switchSwiperItem('next'));

const authorImage = document.querySelector('.swipe__author-avatar');
const authorNameField = document.querySelector('.swipe__author-name');
const authorPositionField = document.querySelector('.swipe__author-position');
const subCommentField = document.querySelector('.swipe__subcomment-text');
const commentField = document.querySelector('.swipe__comment');

let currentSwiperItemIndex = 0;

const interval = setInterval(() => switchSwiperItem('next'), 3000);

const fillSwiperItem = ({
	authorSrc,
	authorName,
	authorPosition,
	subComment,
	comment,
}) => {
	authorImage.src = authorSrc;
	authorNameField.innerHTML = authorName;
	authorPositionField.innerHTML = authorPosition;
	subCommentField.innerHTML = subComment;
	commentField.innerHTML = comment;
};

const switchSwiperItem = (direction) => {
	if (direction === 'next') {
		currentSwiperItemIndex = currentSwiperItemIndex === swiperItems.length - 1 ? 0 : currentSwiperItemIndex + 1;
	} else {
		currentSwiperItemIndex = currentSwiperItemIndex === 0 ? swiperItems.length - 1 : currentSwiperItemIndex - 1;
	}
	fillSwiperItem(swiperItems[currentSwiperItemIndex]);
};

// modal

const modalBtn = document.querySelectorAll('[data-modal]');
const body = document.body;
const modalClose = document.querySelectorAll('.modal__close')

modalBtn.forEach(item => {
	item.addEventListener('click', event => {
		let $this = event.currentTarget;
		let modalId = $this.getAttribute('data-modal');
		let modal = document.getElementById(modalId);
	
		modal.classList.add('show');
		body.classList.add('no-scroll');
	});
});

modalClose.forEach(item => {
	item.addEventListener('click', event => {
		let currentModal = event.currentTarget.closest('.modal');

		currentModal.classList.remove('show');
		body.classList.remove('no-scroll');
	});
});
