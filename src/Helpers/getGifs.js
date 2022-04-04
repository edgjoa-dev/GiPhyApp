

export const getGif = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI (category)}&limit=30&api_key=a9Pm43W2IHePHTQqN9imMCuL9WKPlL3L`;
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
