let form = document.getElementById('main-form');
let chall = document.getElementById('all');
const validate = (event) => {
    event.preventDefault();
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let choice1 = document.getElementById('choice')
    let error = document.getElementById('errors')

    error.innerHTML = "";

    if (name.value.trim() === "") {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz Imię i Nazwisko';
        error.appendChild(liError);
    }

    if (email.value.trim() === "") {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz adres e-mail';
        error.appendChild(liError);

    }

    if (!email.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Adres e-mail musi zawierać "@"';
        error.appendChild(liError);


    }
    if (!choice1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Nie zaznaczyłeś zgody marketingowej 1';
        error.appendChild(liError);

    }
    console.log(error.children.length);
    if (error.children.length > 0) {
        event.preventDefault()

    }

}

const all = (event) => {
    let choice1 = document.getElementById('choice');
    let choice2 = document.getElementById('agree');
    choice1.checked = event.target.checked;
    choice2.checked = event.target.checked;

    choice1.disabled = event.target.checked;
    choice2.disabled = event.target.checked;

}
form.addEventListener('submit', validate)
chall.addEventListener('change', all)