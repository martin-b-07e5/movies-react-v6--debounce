import {pageURL,apiKEY} from './const'

const HttpGet = (url) =>{
    return (
        fetch(`${pageURL}${url}?api_key=${apiKEY}`)
        .then((result) => result.json())
    )}

    export default HttpGet;