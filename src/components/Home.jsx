import React from 'react'
import Button from './Button'
import Header from './Header'
import Footer from "./Footer"
function Home() {
    return (
        <div className="home">
            <div className="container">
                <Header />
                <Button
                    text="Twitter Link"
                    link="https://twitter.com/_kingaustinn"
                    id="twitter"
                />
                <Button
                    text="Zuri Team"
                    link="https://training.zuri.team/"
                    id="btn_zuri"
                />
                <Button text="Zuri Books" link="https://books.zuri.team/" id="books" />
                <Button
                    text="Python Books"
                    link="https://books.zuri.team/python-for-beginners?ref_id=Austin"
                    id="book_python"
                />
                <Button
                    text="Background Checks For Codes"
                    link="https://background.zuri.team/"
                    id="pitch"
                />
                <Button
                    text="Design Books"
                    link="https://books.zuri.team/design-rules"
                    id="book_design"
                />
                <Button
                    text="Contact Me"
                    link="/contact"
                    id="contact"
                />
                <div className="social_links">
                    <a href="https://slack.com/austin nze">
                        <img src="images/slack.png" alt="slack logo" />
                    </a>
                    <a href="https://github.com/ausranking">
                        <img src="images/Icon.png" alt="github logo" />
                    </a>
                </div>
                <Footer />
            </div>
        </div>


    )

}

export default Home





