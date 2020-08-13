import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchEpisode } from '../store/actions'
import Episode from './Episode'

const Episodes = (props) =>  {

    useEffect(() => {
        props.fetchEpisode()
    }, [])

    if(props.updated) {
        props.fetchEpisode()
    }
return (
    <div>
        Episodes
        <>
        {props.data.map(episode => (
            <Episode id={episode.id} {...episode} />
        ))}
        </>
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
export default connect(mapStateToProps, {fetchEpisode})(Episodes)