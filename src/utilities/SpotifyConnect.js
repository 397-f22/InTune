import axios from "axios";

//import token from BE here

// export const Hellow = () => {
//     const [initState, setInitState] = useState([])
//     useEffect(()=>{
// fetch('/api').then(res => {
//     if(res.ok){
//         return res.json()
//     }
// }).then(jsonResponse => setInitState(jsonResponse))
//     },[])
//     console.log(initState.message)
//     return(<h1>hello</h1>);
// }
const SERVER = 'https://us-central1-intune-ab424.cloudfunctions.net/app'
export const searchPlaylist = async (weather) => {
    var data;
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
                q: weather,
                type: "playlist",
                limit: 1
            }
        }).then(function (reponse) {
            return reponse.data
        })
    })
    return data.then(resp => {return resp.playlists.items[0]})
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
            },
            params: {
                limit: 4
            }
        }).then(function (reponse) {
            return reponse.data
        })
    })
    return data.then(resp => {return resp;})
}