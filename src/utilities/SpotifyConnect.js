import axios from "axios";
import { timeOfDay, getSeason } from "./GetDateMetadata";

const SERVER = 'https://us-central1-intune-ab424.cloudfunctions.net/app';

var token;

export const searchPlaylist = async (weather) => {
    var data;
    const queryRange = 5

    if (!token) {
        await fetch(SERVER + '/api').then(res => {
            if (res.ok) {
                let jsonresp = res.json()
                token = jsonresp.token
                return jsonresp
            }
        }).then(jsonResponse => {
            data = axios.get("https://api.spotify.com/v1/search", {
                headers: {
                    Authorization: `Bearer ${jsonResponse.token}`
                },
                params: {
                    q: weather + " " + timeOfDay() + " " + getSeason(),
                    type: "playlist",
                    limit: queryRange
                }
            }).then(function (reponse) {
                return reponse.data
            })
        })
    }
    else {//Have token
        data = axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: weather + " " + timeOfDay(),
                type: "playlist",
                limit: queryRange
            }
        }).then(function (reponse) {
            return reponse.data
        })
    }
    return data.then(resp => { return resp.playlists.items[Math.floor(Math.random() * queryRange)] })
}

export const findSongs = async (playlist) => {
    var data;
    if (!token) {
        await fetch(SERVER + '/api').then(res => {
            if (res.ok) {
                let jsonresp = res.json()
                token = jsonresp.token
                return jsonresp
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
    }
    else{
        data = axios.get(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(function (response) {
                return response.data
            })
    }
    let songs = data.then(resp => {
        let vals = [];
        let result_songs = [];

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
