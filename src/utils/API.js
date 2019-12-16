import axios from "axios";
const BASEURL = "https://api.giphy.com/v1/gifs/search";
const APIKEY = "DHFPFZvIU7Bue4giRFcQrRYyH0kMKDEU";

export default {
  search: function(searchTerm, limit=20, rating="g") {
    return axios.get(`${BASEURL}?api_key=${APIKEY}&q=${searchTerm}&limit=${limit}&rating=${rating}`);
  }
};
