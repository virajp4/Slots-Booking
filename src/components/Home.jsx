import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import './styles/homestyles.css'

export default function Home() {
    return (
        <>
            <ButtonGroup aria-label="Basic example" className='buttons'>
                <Button className='button' variant="secondary">1</Button>
                <Button className='button' variant="secondary">2</Button>
                <Button className='button' variant="secondary">3</Button>
                <Button className='button' variant="secondary">4</Button>
                <Button className='button' variant="secondary">5</Button>
            </ButtonGroup>
        </>
    )
}
