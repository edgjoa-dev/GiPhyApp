

export const getGif = async(category) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI (category)}&limit=18&api_key=UjitCkik1WP7j8rB3dcfR8tMNNVVvN4M`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    } )

    return(gifs);
};
