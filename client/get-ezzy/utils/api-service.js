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
  },

  inserItem: async (item) => {
    return await fetch('http://localhost:3001/item', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(item)
      }
    ).then(res => res.json());
  },

  inserAddress: async (address) => {
    return await fetch('http://localhost:3001/address', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(address)
      }
  ).then(res => res.json());
  }

}


export default apiService;