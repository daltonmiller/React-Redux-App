import React,  { useEffect } from 'react'
import styled from 'styled-components'
const Character = props => {
    
console.log(props)
    return (
        <Box>
        
        <h3>{props.name}</h3>
        <h5>{props.height}</h5>
        <h5>{props.gender}</h5>
        <img src={props.image} />
        </Box>
    )
}

const Box = styled.div`
display: flex;
flex-direction: row;
border: 1px solid black;
margin: 10px;
&img {
    width: 10px;
}
`

export default Character
