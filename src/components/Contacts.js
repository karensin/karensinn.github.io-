import React, { Component } from 'react';
import '../App.css';


class Contacts extends Component {
    render() {
        return (
            <div>
                <section className='contacts' id="contacts">
                    <h3> Get in touch </h3>
                    <section className='contactsList'>
                        <a href="mailto: kkwsin@gmail.com">kkwsin@gmail.com</a>
                        <a href='https://www.linkedin.com/in/karensin94/'>Linkedin</a>
                        <a href='https://github.com/karensin'>Github</a>
                        <a href='https://angel.co/karen-kaweng-sin'>Angel.co</a>
                    </section>
                </section>
                <footer>Karen Sin 2019</footer>
            </div>
        );
    }
}

export default Contacts;
