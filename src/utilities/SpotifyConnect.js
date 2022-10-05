import axios from "axios";
import { json } from "react-router-dom";

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
export const searchPlaylist = async (weather) => {
    var data ;
   await fetch('/api').then(res => {
        if(res.ok){
            return res.json()
        }
    }).then(jsonResponse => {
        console.log(jsonResponse.token)
        data = axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${jsonResponse.token}`
        },
        params: {
            q: weather,
            type: "playlist",
            limit: 1
        }
    })
    })

    
    console.log(data)
    return data.playlists.items[0]
}