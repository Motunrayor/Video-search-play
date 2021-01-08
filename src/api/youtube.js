import axios from "axios";

const KEY = "AIzaSyByTaVZeJVsc-uPK2zhjt8JxD_PBuhCY_E";

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
     params : {
        part: 'snippet',
        maxResults: 5,
        key:KEY,
     }
   }
)
