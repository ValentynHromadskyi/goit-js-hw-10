export function fetchCatByBreed(breedId) {
    const BASE_URL = 'https://api.thecatapi.com/v1';
    const ENDPOINT = 'images/search';
    const API_KEY =
      'live_zqoF07Ke3stbsSDoeM2uJ9EzHBUDgaxwSxFAs4alATcMK0B8tptlMJtXtw7yL6wp';
    const params = new URLSearchParams({
      api_key: API_KEY,
      breed_ids: breedId,
    });
    return fetch(`${BASE_URL}/${ENDPOINT}?${params}`).then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    });
  }
  
  export function fetchBreeds() {
    const BASE_URL = 'https://api.thecatapi.com/v1';
    const ENDPOINT = 'breeds';
    const API_KEY =
      'live_zqoF07Ke3stbsSDoeM2uJ9EzHBUDgaxwSxFAs4alATcMK0B8tptlMJtXtw7yL6wp';
  
    const params = new URLSearchParams({
      api_key: API_KEY,
    });
    return fetch(`${BASE_URL}/${ENDPOINT}?${params}`).then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    });
  }
  