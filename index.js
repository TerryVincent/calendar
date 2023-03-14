const axios = require('axios')
  
// Make request
axios.get('https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=8DA31EF576B947C6AE0FA59DB1BBD365&steamid=76561197984646227&include_appinfo=true')
  
  // Show response data
  .then(res => console.log(res.data))
  .catch(err => console.log(err))