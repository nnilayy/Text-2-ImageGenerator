import axios from 'axios'
import React, { useEffect} from 'react'


const AxiosGet = () => {


    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/')
        .then((response)=>{
            console.log(response.data)
        })
    },[])
  
    return (<></>)}

export default AxiosGet


// api_url = .format(limit)
// response = requests.get(api_url, headers={'X-Api-Key': 'YOUR_API_KEY'})
// ,headers={'X-Api-Key'
// headers:{'X-Api-Key':'h1eTkQ2E27vu7LsDfpbrbg==tNsCfL2kfy0vURDD'}
