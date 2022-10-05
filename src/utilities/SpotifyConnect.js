import axios from "axios";

const token = 'BQAkiiOcqcDgbH_0bNez74r-XcZuhl9FotShBb8aMhPwtyCRbg-p0b2O9M3GMgoFD9UBsx0cwNXM52XcRu0x3bMFN4N2lciyYKYHOzvSHfuy2UN_-Eq0Js_tWROJxA8CTC5-KWcda-zXEPdNBmA2I9L4DlnBTTJfp-lnS80ndr3pACw'

export const searchPlaylist = async (weather) => {
   // e.preventDefault()
   console.log(weather)
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
    console.log(data)
    return data.playlists.items[0]
}