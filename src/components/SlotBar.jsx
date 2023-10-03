import React from 'react'

import Form from 'react-bootstrap/Form';

import './styles/SlotBar.css';

export default function SlotBar(props) {
    const slots = Array.from({ length: props.number }, (_, groupnum) => (
        <div className="slot col pt-1 m-2" key={groupnum}>
            <h5>Batch {groupnum + 1}</h5>
            <Form>
                <div key={`default-checkbox-${groupnum}`} className="mb-2 d-flex flex-column justify-content-center align-items-center">
                    <Form.Check
                        inline
                        label="Slot 1"
                        name={`group-${groupnum}`}
                        type='checkbox'
                        id={`inline-checkbox-1-${groupnum}`}
                    />
                    <Form.Check
                        inline
                        label="Slot 2"
                        name={`group-${groupnum}`}
                        type='checkbox'
                        id={`inline-checkbox-2-${groupnum}`}
                    />
                </div>
            </Form>
        </div>
    ));

    return (
        <div className="slot-box w-100 d-flex justify-content-center mb-5">
            <div className="slotbar d-flex justify-content-evenly w-75 row row-cols-2 row-cols-md-3 row-cols-lg-4">{slots}</div>
        </div>
    );
}
