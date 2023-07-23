import React from 'react'

export default function Posts({data, liker, effacer}) {
  return (
    <div className={data.liker ? "post active" : "post"}>
        <div>
            <h2>{data.titre}</h2>
            <p>{data.description}</p>
        </div>
        <div className='btn'>
            <button onClick={() => liker(data)}>
                {data.liker ? "Deja like" : "Liker"}
            </button>
            <button className='delete' onClick={() => effacer(data.id)}>Effacer</button>
        </div>
    </div>
  )
}
