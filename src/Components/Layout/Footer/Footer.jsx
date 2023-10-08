import './Footer.css';

export function Footer() {

    return (
        <footer className='footer-container'>
            <div id='footer-top-item' className='footer-item'>
                <p>Company</p>
            </div>
            <div className='footer-item'>
                <p>Copywrite 2023</p>
            </div>
            <div className='footer-item'>
                <a href='tel:5554412345'><p>Phone</p></a>
            </div>
            <div className='footer-item'>
                <p>Email</p>
            </div>
        </footer>
    )
}