const form = document.querySelector("form")
const btn = document.querySelector("form .btn-login")



//ativa animação de descer
btn.addEventListener("click", function(event) {

	event.preventDefault()

	const inputEmail = document.querySelector("#login-email")
	const inputPassword = document.querySelector("#login-password")

	if (inputEmail.value != "" && inputPassword.value != "") {

		form.classList.add("form-hide")
	} else {

		form.classList.add("error")		
	}
});

//bloqueia barra de rolagem
form.addEventListener("animationstart", (event) => {

	if (event.animationName == "down") {
		document.querySelector("body").style.overflow = "hidden";
	}
})

//ativa display none para o form
form.addEventListener("animationend", (event) => {

	if (event.animationName == "down")	{

		document.querySelector("body").style.overflow = "none";
		form.style.display = "none";
	}

	if (event.animationName == "nono") {

		form.classList.remove("error")
	}
})

//Background

const ulSquares = document.querySelector("ul.squares") 

for (let i = 0; i < 11; i++) {

	const li = document.createElement("li")
	const random = (min,max) => Math.floor(Math.random() * (max - min) + min)


	const size = random(10, 120)
	const position = random(1, 99)
	const time = random(25, 50)
	const delay = random(0, 15000)

	li.style.width = `${size}px`;
	li.style.height = `${size}px`;

	li.style.bottom = `-${size}px`;
	li.style.right = `${position}%`;
	
	li.style.animation = `squareUp ${time}s linear infinite`
	li.style.animationDelay = `${delay}ms`
	li.style.animationTimingFunction = `cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`

	ulSquares.appendChild(li)
}