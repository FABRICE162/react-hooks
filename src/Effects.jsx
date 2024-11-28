import React, { useEffect, useState } from 'react'

function Effects() {
    const [data , setdata] = useState([])
    const handlefetchdata = async () =>{
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setdata(json))
    }
    useEffect(()=>{
        handlefetchdata()
    },[])
  return (
    <div>
      <h1>this is the useEffect hook : </h1>
      <p>we are going to fetch the data while our page is loading</p>
      <ol>

      {
          data.map((item)=>{
              return (
                  <div>
                    <li>{item.title}</li>
                </div>
            )
        })
    }
    
    </ol>
    </div>
  )
}

export default Effects
