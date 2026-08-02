import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // // useEffect runs whenever the component mount
    // useEffect(()=> {
    //     fetch('https://api.github.com/users/abul-hasan-farrukh')
    //     .then(response => response.json()) //converting String response to JSON
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-500 text-white text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git Pic" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/abul-hasan-farrukh')
    return response.json();
}