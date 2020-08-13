import React from 'react'

const Episode = (props) =>  {
    console.log(props)
return (
    <div>
        <h3>{props.name}</h3>
        <h5>{props.created}</h5>
        <h5>{props.air_date}</h5>
    </div>
    
)
}

export default Episode