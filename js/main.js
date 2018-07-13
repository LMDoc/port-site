
// SEE MORE BUTTON
let headerBottom = document.querySelector('.header-bottom');
let arrow = document.querySelector('#arrow');
const btns = document.querySelectorAll('.btn');

headerBottom.addEventListener('mouseover', () => {
	arrow.style.paddingTop = "15px";
});

headerBottom.addEventListener('mouseleave', () => {
	arrow.style.paddingTop = "0";
});

function scrollTo() {
   const selector =  this.getAttribute('data-value'),
         target   =  document.querySelector(selector);
   
   target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
   });
}

headerBottom.addEventListener('click', scrollTo);
btns.forEach(btn => btn.addEventListener('click', scrollTo))

// WORK HOVER
let workBox1 = document.querySelector('#work-one');
let workBox2 = document.querySelector('#work-two');
let workBox3 = document.querySelector('#work-three');
let workp1 = document.querySelector('#work-one p');
let workp2 = document.querySelector('#work-two p');
let workp3 = document.querySelector('#work-three p');


workBox1.addEventListener('mouseover', () => {
	workBox1.nextElementSibling.style.filter = 'grayscale(100%)';
	workBox1.nextElementSibling.nextElementSibling.style.filter = 'grayscale(100%)';
	workp1.style.opacity = 1;
});

workBox1.addEventListener('mouseleave', () => {
	workBox1.nextElementSibling.style.filter = 'grayscale(0%)';
	workBox1.nextElementSibling.nextElementSibling.style.filter = 'grayscale(0%)';
	workp1.style.opacity = 0;
});

workBox2.addEventListener('mouseover', () => {
	workBox2.previousElementSibling.style.filter = 'grayscale(100%)';
	workBox2.nextElementSibling.style.filter = 'grayscale(100%)';
	workp2.style.opacity = 1;
});

workBox2.addEventListener('mouseleave', () => {
	workBox2.previousElementSibling.style.filter = 'grayscale(0%)';
	workBox2.nextElementSibling.style.filter = 'grayscale(0%)';
	workp2.style.opacity = 0;
});

workBox3.addEventListener('mouseover', () => {
	workBox3.previousElementSibling.style.filter = 'grayscale(100%)';
	workBox3.previousElementSibling.previousElementSibling.style.filter = 'grayscale(100%)';
	workp3.style.opacity = 1;
});

workBox3.addEventListener('mouseleave', () => {
	workBox3.previousElementSibling.style.filter = 'grayscale(0%)';
	workBox3.previousElementSibling.previousElementSibling.style.filter = 'grayscale(0%)';
	workp3.style.opacity = 0;
});