const fetchURL = 'https://ghibliapi.herokuapp.com/films'
const ghibli;

fetch (fetchURL)
    .then ((response) => {
        if (!response.ok) {
            throw Error ('Data Load Error');
        }
        return response.json ();
    })
    .then ((data) => {
        ghibli = data;
    })
    .catch ((error) => {
        throw error ('¡Error!');
    });
console.log (ghibli)