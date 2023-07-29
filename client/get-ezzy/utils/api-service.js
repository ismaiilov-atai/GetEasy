const Base_URL = 'http://localhost:3001';


const apiService = {
  signin: async (user) => {
   return await fetch(`${Base_URL}/user`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
   }).then(res => res.json());
  },
  
    
  checkUser: async () => {
    return await fetch('http://localhost:3001/check-user', {credentials: 'include'}).then(res => {
      if (res.status === 440 || res.status === 401) return false;
      else return res.json();
    });
  }
}


export default apiService;