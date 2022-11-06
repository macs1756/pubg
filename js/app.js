
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

let  controller = new ScrollMagic.Controller();



function initScroll(){
	let area = new ScrollMagic.Scene({	
		offset: 0,
		reverse: false
	}).setClassToggle( ".initial__title" ,  "active" ).addTo(controller);

	let area2 = new ScrollMagic.Scene({	
		offset: 0,
		reverse: false
	}).setClassToggle( ".initial__p-top" ,  "active" ).addTo(controller);

	let area3 = new ScrollMagic.Scene({	
		offset: 0,
		reverse: false
	}).setClassToggle( ".initial__p-bottom" ,  "active" ).addTo(controller);


	

	let area4 = new ScrollMagic.Scene({	
		offset: 0,
		reverse: false
	}).setClassToggle( ".initial__btn-buy" ,  "active" ).addTo(controller);


	let area5 = new ScrollMagic.Scene({	
		offset: 0,
		reverse: false
	}).setClassToggle( ".initial__btn-video" ,  "active" ).addTo(controller);


}


setTimeout(initScroll , 300);








let area6 = new ScrollMagic.Scene({	
	triggerElement: ".initial__dekor-weapon",
	reverse: false
}).setClassToggle( ".functional__title" ,  "active" ).addTo(controller);



let area7 = new ScrollMagic.Scene({	
	triggerElement: ".initial__dekor-weapon",
	reverse: false
}).setClassToggle( ".functional__p" ,  "active" ).addTo(controller);




let area8 = new ScrollMagic.Scene({	
	triggerElement: ".functional__title",
	reverse: false
}).setClassToggle( ".tel__img-item" ,  "active" ).addTo(controller);




let area9 = new ScrollMagic.Scene({	
	triggerElement: ".functional__description-title",
	reverse: false
}).setClassToggle( ".buy" ,  "active" ).addTo(controller);


let area10 = new ScrollMagic.Scene({	
	triggerElement: ".buy",
	reverse: false
}).setClassToggle( ".about__title" ,  "active" ).addTo(controller);



let area11 = new ScrollMagic.Scene({	
	triggerElement: ".swiper",
	reverse: false
}).setClassToggle( ".price__title" ,  "active" ).addTo(controller);





let area12 = new ScrollMagic.Scene({	
	triggerElement: ".price__app",
	reverse: true
}).setClassToggle( ".item__normal" ,  "active" ).addTo(controller);


let area13 = new ScrollMagic.Scene({	
	triggerElement: ".trigerForNextEl",
	reverse: true
}).setClassToggle( ".item__standart" ,  "active" ).addTo(controller);


let trigerFor14 = ".price__app";

if(window.innerWidth < 993){
	trigerFor14 = ".trigerForNextEl2";
};



let area14 = new ScrollMagic.Scene({	
	triggerElement: trigerFor14,
	reverse: true
}).setClassToggle( ".item__pro" ,  "active" ).addTo(controller);


let area15 = new ScrollMagic.Scene({	
	triggerElement: ".trigerForNextEl3",
	reverse: false
}).setClassToggle( ".question__title" ,  "active" ).addTo(controller);




let area16 = new ScrollMagic.Scene({	
	triggerElement: ".question__title",
	reverse: true
}).setClassToggle( ".anim1" ,  "active" ).addTo(controller);


let area17 = new ScrollMagic.Scene({	
	triggerElement: "#anim2",
	reverse: true
}).setClassToggle( ".anim2" ,  "active" ).addTo(controller);



let area18 = new ScrollMagic.Scene({	
	triggerElement: "#anim5",
	reverse: false
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


//

let openAkardeon = document.querySelectorAll(".question__net-item");

if(openAkardeon.length > 0){

	openAkardeon.forEach(item => {
		item.addEventListener("click" , function(){
			let img = this.querySelector("img");
			img.classList.toggle("active");
			this.children[1].classList.toggle("active");
		});
	});
	
};

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