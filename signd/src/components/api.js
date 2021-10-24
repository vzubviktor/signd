import axios from 'axios';

const fetchRepos =  (username) => {
    return axios.get(`https://api.github.com/users/${username}/repos`)
    .catch(function (error) {
      console.log(error);
    })
   

}

export default fetchRepos;