import axios from "axios";

const token = 'BQCz3ATPtlq6haTzJJ-3Gbrt_btJ_nf7G-GYauWptLojHDhy1SZOeFhHmXbQTPFF2gUolWiNuA8V5iFTT18YypvtjPm9MwMM18K1DoF_zcVkC-yw90sIwYjf1uENEg2TJnvwr22kre4qere_ph9sn4KBeXVLLaZpNK4_cJue7KitAg4'
//GET https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n

export const searchPlaylist = async (weather) => {
    // e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: weather,
            type: "playlist",
            limit: 1
        }
    })
    return data.playlists
}