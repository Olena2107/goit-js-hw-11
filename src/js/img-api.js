const API_URL = 'https://pixabay.com/api/';
import axios from 'axios';

export async function searchPhotoApi(term, shownPage) {
  const option = {
    headers: {
      'Content-type': 'application/json',
    },
    params: {
      key: '40492892-7543a9e9266bb88928c75c637',
      q: `${term}`,
      image_type: 'photo',
      photo: 'horizontal',
      safesearch: 'true',
      page: `${shownPage}`,
      per_page: 40,
    },
  };
  return await axios.get(API_URL, option).then(response => {
    const resultSearch = response.data;
    if (resultSearch.totalHits < 1) {
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    return resultSearch;
  });
}