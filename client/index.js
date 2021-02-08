function getDataFromServer() {
    fetch('/getData')
        .then(response => {
            return response.json();
        })
        .then(data => {
            dataWrapper.innerHTML = data.reduce((htmlStr, value) => {
                return `${htmlStr}<div>${value}</div>`
            }, '');
        })
}

const dataWrapper = document.getElementById('data-wrapper');
