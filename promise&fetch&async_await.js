//func to retrieve a blob of json
//make ajax req using 'fetch' func

let urL = 'http://rallycoding.herokuapp.com/api/music_albums';

// function fetchAlbums () {
//   fetch(urL)
//     .then(res => res.json())
//     .then(json => console.log(json))
// }

// async function fetchAlbums () {
//   const res = await fetch(urL);
//   const json = await res.json();
//   console.log(json);
// }

const fetchAlbums = async () => {
  const res = await fetch(urL);
  const json = await res.json();
  console.log(json);
};

fetchAlbums();

//for old browser => npm fetch-polyfill
