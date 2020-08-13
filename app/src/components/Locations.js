import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchLocation } from '../store/actions'
import Location from './Location'

const Locations = (props) => {

    useEffect(() => {
        props.fetchLocation()
    }, [])

    if (props.updated) {
        props.fetchLocation()
    }

    return (
        <div>
            <>
            {props.data.map(location => (
                <Location id={location.id} {...location}/>
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
export default connect(mapStateToProps, {fetchLocation})(Locations)