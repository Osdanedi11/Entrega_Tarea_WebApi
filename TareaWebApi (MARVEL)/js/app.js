const marvel = {
    render: () => {
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=ef4f4fb26f6c86f1698de3c9ec99809f&hash=1887351c54b7c93f703f6e080e4a2155';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlAPI)
            .then(res => res.json())
            .then((json) => {
                for (const hero of json.data.results) {
                    let urlHERO = hero.urls[0].url;
                    contentHTML += `
            <div class="col-md-4">
                <a href="${urlHERO}" target="_blank">
                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                </a>
                <h3 class="title">${hero.name}</h3>
            </div>`;
                }
                container.innerHTML = contentHTML;
            })
    }
};
marvel.render();