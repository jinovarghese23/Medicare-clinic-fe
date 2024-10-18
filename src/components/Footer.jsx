import React from 'react'

function Footer() {
    return (
        <>
            <footer className="footer bg-base-200 text-base-content p-10">
                <aside>
                    <img width="50"
                        height="50"
                        viewBox="0 0 24 24" src="https://www.zarla.com/images/zarla-medicare-clinic-1x1-2400x2400-20220124-3pc63vbckqybc49x99bk.png?crop=1:1,smart&width=250&dpr=2" alt="" />
                    <p className='text-xl'>
                        Medicare Clinic
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </aside>
                <nav className='text-xl ms-3'>
                    <h6 className="footer-title">Services</h6>
                    <a style={{textDecoration:'none'}} className="link">Branding</a>
                    <a style={{textDecoration:'none'}} className="link">Design</a>
                    <a style={{textDecoration:'none'}} className="link">Marketing</a>
                    <a style={{textDecoration:'none'}} className="link">Advertisement</a>
                </nav>
                <nav className='text-xl ms-3'>
                    <h6 className="footer-title">Company</h6>
                    <a style={{textDecoration:'none'}} className="link">About us</a>
                    <a style={{textDecoration:'none'}} className="link">Contact</a>
                    <a style={{textDecoration:'none'}} className="link">Jobs</a>
                    <a style={{textDecoration:'none'}} className="link">Press kit</a>
                </nav>
                <nav className='text-xl'>
                    <h6 className="footer-title">GET IN TOUCH</h6>
                    <a style={{textDecoration:'none'}} className="link">hojohow958@avzong.com</a>
                    <a style={{textDecoration:'none'}} className="link">(858) 734-0459
                    </a>
                </nav>
            </footer>
            {/* <hr /> */}
        </>
    )
}

export default Footer