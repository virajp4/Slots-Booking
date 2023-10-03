import React from 'react'

import Alert from 'react-bootstrap/Alert';
import SlotBar from './SlotBar';

import './styles/PageBody.css';

export default function PageBody(props) {

    const classes = {1: 'Section A', 2: 'Section B', 3: 'Section C', 4: 'Section D'}
    const section = classes[props.pageNum]

    return (
        <>
            <div className="container d-flex justify-content-center mt-5 pt-5">
                <div>
                    <div className="row mb-5">
                        <div className="col-12 text-center d-flex flex-column align-items-center">
                            <h1>Slot Bar for {`${section}`}</h1>
                            <p>Select the slots that you wish to book.</p>
                            <Alert key='warning' variant='warning' className='alrt'>
                                <Alert.Heading>Warning!</Alert.Heading>
                                <p className='mb-0'>
                                    A user can only book 2 slots per project.
                                </p>
                            </Alert>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <SlotBar number={`${props.slotsNum}`} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
