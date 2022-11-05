import React from 'react'
import Footer from './Footer'
import './404.css'
import Button from './Button'

function Error() {
    return (
        <div className='error'>
            <div className="errorpage">
                <div className='text404'>404 error</div>
                <h1 className='head'>We can't find that page</h1>
                <p className='error-par'>sorry, the page you are looking for doesn't exist</p>
                <div className="quick-btns">
                    <Button img={'btn-icon.png'} text="Go Back" 
                    link="/contact" id="back_btn" />
                    <Button text="Take me home" link="/" id="home_btn" />

                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Error