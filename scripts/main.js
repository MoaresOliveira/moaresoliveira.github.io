document.querySelector(".case-container").addEventListener("wheel", (event) => {
	if (event.deltaY > 0) {
		event.target.scrollBy(300, 0);
	} else {
		event.target.scrollBy(-300, 0);
	}
});

const Nome = document.getElementById("nome");
const Email = document.getElementById("email");
const Mensagem = document.getElementById("mensagem");

function sendMessage(event){
	event.preventDefault();
	console.log(Nome, Email, Mensagem)
	let nome = Nome.value;
	let email = Email.value;
	let mensagem = Mensagem.value;
	let body = `
		Nome: ${nome}
		Email: ${email}

		${mensagem}
	`
	
}
