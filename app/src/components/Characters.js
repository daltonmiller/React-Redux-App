import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCharacter } from '../store/actions'
import Character from './Character'


const Characters = (props) => {

    useEffect(() => {
        props.fetchCharacter()
    }, [])

    if (props.updated) {
        props.fetchCharacter()
    }

    return (
        <div>
            characters
            {props.data.map(person => (
                
            <Character  id={person.id} {...person}/>
            
            ))}
            
          
        </div>
    )
}
const mapStateToProps = state => {
    return {
        data: state.data,
        isFetching: state.isFetching,
        error: state.error,
        updated: state.updated
      
    }
    
}
export default connect(mapStateToProps, {fetchCharacter})(Characters)

