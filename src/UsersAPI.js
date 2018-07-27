const api = "http://localhost:8080/FullStackProject"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Access-Control-Allow-Origin':'*',
  'Access-Control-Allow-Credentials':true
}

export const get = (userId) =>
  fetch(`${api}/users/${userId}`, { headers })
    .then(res => {console.log(res);
        return res.json();})
    .then(data => data.user)
    

export const getAll = () =>
  fetch(`${api}/users`,{headers}).then(res => res.json())
   

export const update = (user, shelf) =>
  fetch(`${api}/users/${user.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json())

export const search = (query, maxResults) =>
  fetch(`${api}/users`, {
    method: 'GET',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, maxResults })
  }).then(res => res.json())
    .then(data => data.users)