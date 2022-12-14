



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
	});
};
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
		};
});
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
});
btnBurger.addEventListener("click", ()=>{
	burgerBody.classList.toggle("burger__body-active");
	btnBurger.classList.toggle("header__burger-btn__open");
	if(burgerBody.className === "burger__body burger__body-active"){
		burgerWr.style.display = "block";
	}else{
		burgerWr.style.display = "none";
	};
});
let burgerItems = burgerBody.querySelectorAll("li");
burgerItems.forEach(item=>{
	item.addEventListener("click", ()=>{
		burgerBody.classList.remove("burger__body-active");
		btnBurger.classList.remove("header__burger-btn__open");
		burgerWr.style.display = "none";
	});
});
let languageOption = document.querySelectorAll(".language__option");
languageOption.forEach(item=>{
	item.addEventListener("click", (e)=>{ 
		let srcImg =  item.children[0].getAttribute("src");
		let text = item.children[1].innerText;
		let currentImg = document.querySelector("#currentImg");
		let currentText = document.querySelector("#currentText");
		currentText.innerText = text;
		currentImg.setAttribute("src", srcImg);
	});
});
let initialLine = document.querySelector(".initial__line");
if(initialLine){

	function randomOpacity(){
		let randomValue = 0 + Math.round(Math.random()* (100- 0)) / 100;
		initialLine.style.opacity = randomValue ;
	}
	setInterval(randomOpacity, 1000);
};

if(window.innerWidth < 601){
	let initialBtn = document.querySelector(".initial__btn-video");
	initialBtn.innerText = "??????????-??????????";
};
let  controller = new ScrollMagic.Controller();
function initScroll(){
	let area = new ScrollMagic.Scene({	
		offset: 0,
		reverse: false
	}).setClassToggle( ".initialAnimation" ,  "active" ).addTo(controller);
};
setTimeout(initScroll , 300);
let area6 = new ScrollMagic.Scene({	
	triggerElement: ".initial__dekor-weapon",
	reverse: false
}).setClassToggle( ".functionalAnimation" ,  "active" ).addTo(controller);
let area8 = new ScrollMagic.Scene({	
	triggerElement: ".functional__title",
	reverse: false,
}).setClassToggle( ".tel__img-item" ,  "active" ).addTo(controller);

let area9 = new ScrollMagic.Scene({	
	triggerElement: ".functional__description-title",
	reverse: false,
}).setClassToggle( ".buy" ,  "active" ).addTo(controller);

let area10 = new ScrollMagic.Scene({	
	triggerElement: ".buy",
	reverse: false,
}).setClassToggle( ".about__title" ,  "active" ).addTo(controller);

let area11 = new ScrollMagic.Scene({	
	triggerElement: ".swiper",
	reverse: false,
}).setClassToggle( ".price__title" ,  "active" ).addTo(controller);

let area12 = new ScrollMagic.Scene({	
	triggerElement: ".price__app",
	reverse: true,
}).setClassToggle( ".item__normal" ,  "active" ).addTo(controller);

let area13 = new ScrollMagic.Scene({	
	triggerElement: ".trigerForNextEl",
	reverse: true,
}).setClassToggle( ".item__standart" ,  "active" ).addTo(controller);

let trigerFor14 = ".price__app";

if(window.innerWidth < 993){
	trigerFor14 = ".trigerForNextEl2";
}

let area14 = new ScrollMagic.Scene({	
	triggerElement: trigerFor14,
	reverse: true,
}).setClassToggle( ".item__pro" ,  "active" ).addTo(controller);

let area15 = new ScrollMagic.Scene({	
	triggerElement: ".trigerForNextEl3",
	reverse: false,
}).setClassToggle( ".question__title" ,  "active" ).addTo(controller);

let area16 = new ScrollMagic.Scene({	
	triggerElement: ".question__title",
	reverse: true,
}).setClassToggle( ".anim1" ,  "active" ).addTo(controller);

let area17 = new ScrollMagic.Scene({	
	triggerElement: "#anim2",
	reverse: true,
}).setClassToggle( ".anim2" ,  "active" ).addTo(controller);

let area18 = new ScrollMagic.Scene({	
	triggerElement: "#anim5",
	reverse: false,
}).setClassToggle( ".footer__title" ,  "active" ).addTo(controller);


const swiper = new Swiper('.swiper', {
	navigation: {
		nextEl: ".arrow__next",
		prevEl: ".arrow__prev"
	},
	spaceBetween: 40,
	breakpoints: {
		600: {
			loop:  true
		}
	}
}
);

let form = document.querySelectorAll(".form");

form.forEach(item=>{
	item.addEventListener("click", function(){
		this.classList.add("active");
	})

})

let blur = document.querySelectorAll(".blur");

blur.forEach(item=>{

	if(item.value !== ""){
		item.parentElement.classList.add("active")
	}

		item.addEventListener("blur", function(){
			
			if(item.value === ""){
				item.parentElement.classList.remove("active")
			}
		})
})

let formName = document.querySelector(".form__name-name");
let formEmail = document.querySelector(".form__email");
let regName = /^[??-????-??a-zA-Z??-??????-????]{3,}$/;
let regEmail = /^[a-zA-Z0-9_]+@[a-z0-9-]+\.[a-z]{2,6}$/;
let formBtn = document.querySelector(".form__btn-push");
let modalWr = document.querySelector(".modal__wr");

modalWr.addEventListener("click", ()=>{
	modalWr.classList.remove("active");
});




formBtn.addEventListener("click", ()=>{

if(formName.value === ""){
	formName.style.borderBottom = "1px solid red";
}else{
	if(!regName.test(formName.value)){
		formName.style.borderBottomColor = "red";
	}
	else{
		formName.style.borderBottomColor = "rgba(46, 58, 89, 0.43)";
	};
};
if(formEmail.value === ""){
	formEmail.style.borderBottom = "1px solid red";
}else{
	if(!regEmail.test(formEmail.value)){
		formEmail.style.borderBottomColor = "red";
	}else{
		formEmail.style.borderBottomColor = "rgba(46, 58, 89, 0.43)";
	}
};

if(regName.test(formName.value) && regEmail.test(formEmail.value)){
	modalWr.classList.add("active");
};
});


let questionItem = document.querySelectorAll(".question__net-item");


questionItem.forEach(item=>{
	item.addEventListener("click", ()=>{
			item.children[0].children[1].classList.toggle("active");
			item.children[1].classList.toggle("active");
	})
})
