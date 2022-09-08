import axios from 'axios';

export default async function fetchImages(value, page) {
  const url = 'https://pixabay.com/api/';
  const key = '29793920-75f6103355f31eb71a4495b72';
  const filter = `?key=${key}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

  return await axios.get(`${url}${filter}`).then(response => response.data);
}


// export const fetchImages = async (inputValue, pageNr) => {
//   return await fetch(
//     `https://pixabay.com/api/?key=29793920-75f6103355f31eb71a4495b72&q=${inputValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNr}`
//   )
//     .then(async response => {
//       if (!response.ok) {
//         if (response.status === 404) {
//           return [];
//         }
//         throw new Error(response.status);
//       }
//       return await response.json();
//     })
//     .catch(error => {
//       console.error(error);
//     });
// };