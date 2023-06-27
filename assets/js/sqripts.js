$(document).ready(function(){
    // Click Event  
		const toggleBtn = document.querySelector(".show");
		const toggleBtnIcon = document.querySelector(".show i");
		const dropDownMenu = document.querySelector(".menu");
			toggleBtn.onclick = function(){
			dropDownMenu.classList.toggle('open')
			const isOpen = dropDownMenu.classList.contains('open')

		toggleBtnIcon.classList = isOpen
		? 'fa-solid fa-xmark'
		: 'fa-solid fa-bars-staggered'
	};
    // counter
    $('.counter1').countMe(40,65)
    $('.counter2').countMe(40,65)
    $('.counter3').countMe(40,65)
    $('.counter4').countMe(40,65);
});
