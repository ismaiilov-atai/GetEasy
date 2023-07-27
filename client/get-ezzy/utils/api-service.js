const Base_URL = 'http://localhost:3001';


const apiService = {
  signin: async (user) => {
   return await fetch(`${Base_URL}/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
   }).then(res => res.json());
  },
  
    
  checkUser: async () => {
    return await fetch('http://localhost:3001/check-user').then(res => res.json());
  }
}


export default apiService;