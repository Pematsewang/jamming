const clientId = '6517c3eddc3e4b36bcb32905bba23441'; 
const redirectUri = 'http://127.0.0.1:3000/'; 

let accessToken;


const Spotify = {
    getAccessToken() {
      if (accessToken) return accessToken;
  
      const tokenMatch = window.location.href.match(/access_token=([^&]*)/);
      const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
  
      if (tokenMatch && expiresInMatch) {
        accessToken = tokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);
        window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        return accessToken;
      } else {
        const scope = 'playlist-modify-public playlist-modify-private';
        const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
        window.location = authUrl;
      }
    },
  
    async search(term) {
      const token = Spotify.getAccessToken();
      console.log('Token used in search:', token); 
    if (!token) {
    console.log('No token available');
    return [];
  }
      const endpoint = `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(term)}`;
  
      const response = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Raw Spotify response:', response);
      const jsonResponse = await response.json();
  
      if (!jsonResponse.tracks) return [];
  
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri,
      }));
    },
  };
  
  export default Spotify;