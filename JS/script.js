
document.querySelector('.burger').addEventListener('click',function(){
	this.classList.toggle ('active');
	document.querySelector('.menu_body').classList.toggle('open');
});