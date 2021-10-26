import axios from 'axios';



export const fetchUser =  (username) => {
  return axios.get(`https://api.github.com/users/${username}`)
  .catch(function (error) {
    console.log(error);
  })
};

 export const fetchRepos = async  (username) => {
    return await  axios.get(`https://api.github.com/users/${username}/repos`)
    .then((res) =>{
      if (res.data) {
        return res.data;
      }
      else {
        console.log('no repos are found ')
      }
    })
    .catch(function (error) {
      console.log(error);
    })
 };

 export const fetchOrgs = async  (username) => {
  return await  axios.get(`https://api.github.com/users/${username}/orgs`)
  .then((res) =>{
    if (res.data) {
      console.log(res.data)
      return res.data;
    }
    else {
      console.log('no orgs are found ')
    }
  })
  .catch(function (error) {
    console.log(error);
  })
};
