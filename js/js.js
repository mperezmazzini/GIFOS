
let suggestionsImgs = document.getElementsByClassName('imgs');

async function getSuggestionsImgs() {
    let url = "https://api.giphy.com/v1/gifs/trending?api_key=6uxn2lwzi8rT51F8zTJrJfxCMh7cCgds&limit=25&rating=g";
    const resp = await fetch(url);
    const data = await resp.json();
    return data
};

let suggestions = getSuggestionsImgs();

suggestions.then(data => {
    let img = document.createElement('img');
    img.setAttribute('src', data.images);
    suggestionsImgs.appendChild(img);
    console.log(data);
}).catch(err => {
    console.error('fetch failed', err);
})


