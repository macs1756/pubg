



function isWebp(){
	function testWebp(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function (){
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

	}
	testWebp(function (support){
		let className = support = true ? "webp" : "no-webp";
		document.documentElement.classList.add(className);
	})
}
	
isWebp();





let dotts = document.querySelectorAll(".initial__dekor-dotts");

function randomaizer(){

	dotts.forEach( dotts=> {
		let randomWidth = 0 + Math.round(Math.random()* (100- 0));
		let randomHeight= 0 + Math.round(Math.random()* (100- 0));
		dotts.style.left = `${randomWidth}%`;
		dotts.style.top = `${randomHeight}%`;
	})

}



randomaizer()
setTimeout(randomaizer, 1);
setInterval(randomaizer, 3000);







let moreLanguage = document.querySelector(".more__language");
let header = document.querySelector("header");



window.addEventListener("scroll", ()=>{
		if(scrollY > 10){
			
			header.classList.add("scroll");
		}else{
			header.classList.remove("scroll");
		}
})





window.addEventListener("click", (e)=>{

if(
	e.target.classList[0] === "select__language" || e.target.classList[0] === "arrow__language" || e.target.classList[0] === "language__element"
){
	moreLanguage.classList.toggle("more__language-active");
	
}else{
	moreLanguage.classList.remove("more__language-active");
}



});



let burgerBody = document.querySelector(".burger__body");
let btnBurger = document.querySelector(".header__burger-btn");
let burgerWr = document.querySelector(".burger__body-wr");









burgerWr.addEventListener("click", ()=>{
	
	burgerBody.classList.remove("burger__body-active");
	btnBurger.classList.remove("header__burger-btn__open");
})




btnBurger.addEventListener("click", ()=>{
	burgerBody.classList.toggle("burger__body-active");
	btnBurger.classList.toggle("header__burger-btn__open");
	if(burgerBody.className === "burger__body burger__body-active"){
		burgerWr.style.display = "block";
	}else{
		burgerWr.style.display = "none";
	}
	
});


let burgerItems = burgerBody.querySelectorAll("li");

burgerItems.forEach(item=>{
	item.addEventListener("click", ()=>{
		burgerBody.classList.remove("burger__body-active");
		btnBurger.classList.remove("header__burger-btn__open");
		burgerWr.style.display = "none";
	})
})










let languageOption = document.querySelectorAll(".language__option");


languageOption.forEach(item=>{
	item.addEventListener("click", (e)=>{ 

		let srcImg =  item.children[0].getAttribute("src");
		let text = item.children[1].innerText;
		

		let currentImg = document.querySelector("#currentImg");
		let currentText = document.querySelector("#currentText");


		currentText.innerText = text;
		currentImg.setAttribute("src", srcImg);
		



	})
})

//initial-dotts











function randomOpacity(){
	let randomValue = 0 + Math.round(Math.random()* (100- 0)) / 100;
	let initialLine = document.querySelector(".initial__line");
	initialLine.style.opacity = randomValue ;
}




setInterval(randomOpacity, 1000);


if(window.innerWidth < 601){
	let initialBtn = document.querySelector(".initial__btn-video");
	initialBtn.innerText = "Видео-ролик";
}





//scroll effect

//елементи яким ми хочемо задати скролл
let scrollAnimation = document.querySelectorAll(".anim");
let intialBtnBuy = document.querySelector(".initial__btn-buy");
let intialBtnVideo = document.querySelector(".initial__btn-video");







if(scrollAnimation.length > 0){
	window.addEventListener("scroll" , AddScrollEffect);
	function AddScrollEffect() {
		for(index=0; index<scrollAnimation.length; index++){
				//получаємо всі елементи яким потрібно примінити ефект
				let animItem = scrollAnimation[index];
				//получаємо висоту елемента 
				let animItemHeight = animItem.offsetHeight;
				//висота підносно верху вікна віндовс
				let animItemOffSet = offset(animItem).top;
				//коефіцієнт коли почне працювати анімація
				let animStart = 6;

				//calc
				let animItemPoint = window.innerHeight - animItemHeight / animStart;

				if(animItemHeight > window.innerHeight){
					let animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}else{
					let animItemPoint = window.innerHeight - animItemHeight / animStart;
				}

				
				if((scrollY > animItemOffSet - animItemPoint) && scrollY < (animItemOffSet + animItemHeight)){
					animItem.classList.add("active");
					intialBtnBuy.classList.add("activeBtnBuy");
					intialBtnVideo.classList.add("activeBtnVideo");
				}else{
					
				}


		}
	}


  				//функція вираховує позицію елемента відносно віндовс
	function offset(el){
		const rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}








//при запуску функції одразу анімація блоку інітіал виконується одразу
	setTimeout(AddScrollEffect, 300)
	//AddScrollEffect();
}



