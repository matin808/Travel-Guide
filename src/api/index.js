import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': 'c92181cb26msh5d8b38a9aedbaa9p18f43ejsn395742a8e7ce'
    }
  };
  
export const getPlacesData = async () => {
    try {
        const {data : {data}} = await axios.get(URL, options);

        return data;

    } catch (error) {
        console.log(error);
    }
}