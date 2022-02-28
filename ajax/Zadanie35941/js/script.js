let koniec = 0;
const pokaz = () => {
    let zdj = document.getElementById('gif')
    console.log("pokaz");
    zdj.style.display = "block"

}
const ukryj = () => {
    let zdj = document.getElementById('gif')
    console.log("ukryto");
    zdj.style.display = "none"

}

const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-users.php')
        .then(res => res.json())
        .then(data => {
            let body = document.body;
            let hr = document.createElement('hr')
            body.appendChild(hr)


            for (let user of data) {
                let pId = document.createElement('p');
                let pName = document.createElement('p');
                let pUser = document.createElement('p');

                pId.innerText = `User ID:${user.id}`;
                pName.innerText = `User Name:${user.name}`;
                pUser.innerHTML = `User:${user.webside}<br />------------`;



                body.appendChild(pId)
                body.appendChild(pName)
                body.appendChild(pUser)
                ukryj();



            }
            console.log(data);
        })
        .catch(erroor => {
            console.error(erroor)
        })


}


const scrollToEndOfPage = () => {
    let plik = document.documentElement;
    let strona = plik.scrollHeight;
    let stronaTop = plik.scrollTop;
    let stronaCenter = plik.clientHeight;
    let sumaWysokosci = Math.ceil(stronaTop + stronaCenter);


    console.log(sumaWysokosci);
    console.log("==================");
    console.log(`Wysokośc strony :${strona}px`);
    console.log(`Wysokośc scroll do góry :${stronaTop}px`);
    console.log(`Wysokośc scroll srodek :${stronaCenter}px`);
    console.log("==================");

    if (sumaWysokosci >= strona) {
        let ilosc = koniec += 1;

        console.log(`ilosc zejsc na dół ${ilosc}`);
        pokaz();
        getData();

    }




}

window.addEventListener('scroll', scrollToEndOfPage)