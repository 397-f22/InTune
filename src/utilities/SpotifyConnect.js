import axios from "axios";

const SERVER = 'https://us-central1-intune-ab424.cloudfunctions.net/app';


export const timeOfDay = () => {
    const today = new Date();
    const time = today.getHours()
    return  (6<=time && time<12) ? "Morning" :
            (12<=time && time<16) ? "Afternoon":
            (16<=time && time<22) ? "Evening":
           "Night"

}

export const searchPlaylist = async (weather) => {
    var data;
    const queryRange = 5
    console.log(timeOfDay())
    await fetch(SERVER + '/api').then(res => {
        if (res.ok) {
            return res.json()
        }
    }).then(jsonResponse => {
        data = axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${jsonResponse.token}`
            },
            params: {
                q: weather +" "+ timeOfDay(),
                type: "playlist",
                limit: queryRange
            }
        }).then(function (reponse) {
            return reponse.data
        })
    })
    return data.then(resp => {return resp.playlists.items[Math.floor(Math.random()*queryRange)]})
}

export const findSongs = async (playlist) => {
    var data;
    await fetch(SERVER + '/api').then(res => {
        if (res.ok) {
            return res.json()
        }
    }).then(jsonResponse => {
        data = axios.get(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, {
            headers: {
                Authorization: `Bearer ${jsonResponse.token}`
            }
        }).then(function (response) {
            return response.data
        })
    })
    let songs = data.then(resp => {
        let vals = [];
        let result_songs = [];
        console.log(resp)
        while (result_songs.length < 4) {
            let random = Math.floor(resp.items.length * Math.random())
            if (!vals.includes(random)) {
                result_songs.push(resp.items[random].track)
                vals.push(random)
            }
        }
        
        return result_songs
        })
    
    return songs
}
