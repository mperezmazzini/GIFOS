const apiKey = '6uxn2lwzi8rT51F8zTJrJfxCMh7cCgds'



async function getSuggestionsImgs(numberOfGifs) {
    let url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${numberOfGifs}`;
    const resp = await fetch(url);
    const data = await resp.json();
    return data
};

const Show = getSuggestionsImgs()

Show.then(data => { 
    console.log(data.id)
})
