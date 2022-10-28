



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

let btnBurger = document.querySelector(".header__burger-btn");


btnBurger.addEventListener("click", ()=>{
	btnBurger.classList.toggle("header__burger-btn__open");
});




let languageOption = document.querySelectorAll(".language__option");


languageOption.forEach(item=>{
	item.addEventListener("click", (e)=>{ 
		let srcImg =  item.children[0].getAttribute("src");
		let text = item.children[1].innerText;
		
		let currentImg = document.querySelector("#currentImg");
		let currentText = document.querySelector("#currentText");

		currentText.innerText = text;

		console.log(srcImg);
		currentImg.setAttribute("src", srcImg);
		



	})
})



