import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { fetchLocation } from '../store/actions'
import Modals from './Modal'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

//   Modal.setAppElement('#yourAppElement')

const Location = (props) => {
    console.log(props.data)
    var subtitle;
    const [modalIsOpen, setIsOpen] = useState(false)

    useEffect(() => {
        props.fetchLocation()
    }, [])

    if (props.updated) {
        props.fetchLocation()
    }

    const openModal = () => {
        setIsOpen(true)
    }

    const afterOpenModal = () => {
        subtitle.style.color = '#f00';
    }

    const closeModal = () => {
        setIsOpen(false)
    }
console.log(props)
    return (
        <div>
            
            <h3>{props.name}</h3>
            <h5>{props.type}</h5>
            <h5>{props.dimension}</h5>
            <button onClick={openModal}>residents</button>
            <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="boom"
            >
                <h2 ref={_subtitle => (subtitle = _subtitle)}>sadly idk how to make this work</h2>
                <div>{props.data.map(location => (
                <Modals  id={location.id} residents={location.residents}/>
                ))}</div>
                <button onClick={closeModal}>close</button>

                </Modal>
                
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

export default connect(mapStateToProps, {fetchLocation})(Location)