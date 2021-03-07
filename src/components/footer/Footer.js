import React from 'react'
import './footer.css'
import  {Link , NavLink} from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div>
                <ul id='bottomMenu'>
                    <Link className='li' to='/'>HOME</Link>
                    <Link className='li' to='/product'>PRODUCTS</Link>
                    <Link className='li' to='/checkout'>Checkout Product</Link>
                </ul>
            </div>
            <div className='privacy d-flex flex-row '>
                <div className='socialMedia '>
                    <Link to='/'><i className="bi bi-twitter twitter"></i></Link>
                    <Link to='/'><i className="bi bi-instagram instagram"></i></Link>
                    <Link to='/'><i className="bi bi-linkedin linkedin"></i></Link>
                </div>
                <div className='copyRight'>
                    <p>
                        Copyright © 2021 | Designer: Farid Farahamnd | Powered by React.JS
                    </p>
                </div>
            </div>
        </footer>
    )
}
