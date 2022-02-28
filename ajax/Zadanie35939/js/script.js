let przycisk = document.getElementById('main-button')

const getData = () => {


    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then(res => res.json())
        .then(data => {
            let userId = document.createElement('p')
            let id = document.createElement('p')
            let title = document.createElement('p')
            let pBody = document.createElement('p');
            let hr = document.createElement('hr')

            userId.innerText = `Post Id ${data.id}`;
            id.innerHTML = `User ID:${data.userId}`;
            title.innerText = `TITLE:${data.title}`;
            pBody.innerText = `Body: ${data.body}`;

            document.body.appendChild(userId);
            document.body.appendChild(id);
            document.body.appendChild(title);
            document.body.appendChild(pBody);
            document.body.appendChild(hr);

        })
        .catch(error => {
            console.error(error);
        })


}
przycisk.addEventListener('click', getData)