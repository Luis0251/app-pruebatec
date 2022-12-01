const apiUrl = {
    baseUrl : 'https://api.themoviedb.org/3/',
    apiKey : 'e3b71c43f3f95060d51156a905de6045',
    originalImage : (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image : (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,

}

export {apiUrl}