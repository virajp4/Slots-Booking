import React from 'react'

import NavBar from './NavBar';

export default function Home() {
    return (
        <>
            <NavBar />
            <div className="container d-flex justify-content-center mt-5 pt-5">
                <div>
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <h1>Welcome!</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <p>Click on the login button to login to your account.</p>
                            <p>Then select your section from above and select the slot which you wish to book.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
