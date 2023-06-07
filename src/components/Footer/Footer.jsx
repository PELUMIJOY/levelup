// import React from 'react'
import footer from "./Footer.module.css"

function Footer() {
  return (
    <footer>
<div className={footer.top}>
    <div className={footer.left}>
    <p className={footer.left}>
            Charit<span className={footer.leftspan}>Able</span>
          </p>
          <p>Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do euismod tempor incididunt ut labore et dolore </p>
    </div>
    <div className={footer.right}>
        <div className={footer.rightP}>
            <h3 className={footer.about}>About </h3>
            <ul className={footer.list}>
                <li className={footer.listItems}>About Us</li>
                <li className={footer.listItems}>Features</li>
            </ul>
        </div>
        <div>
            <h3 className={footer.volunteer}>Volunteer</h3>
            <ul className={footer.list}>
                <li className={footer.listItems}>Instructor</li>
                <li className={footer.listItems}>Donor</li>
                <li className={footer.listItems}>Partner</li>
            </ul>
        </div>
        <div>
        <h3  className={footer.support}>Support</h3>
            <ul className={footer.list}>
                <li className={footer.listItems}>FAQs</li>
                <li className={footer.listItems}>Support Center</li>
                <li className={footer.listItems}>Contact Us</li>
            </ul>
        </div>
    </div>
</div>
<div className={footer.bottom}>
<p className={footer.bottomLeft}>
            Charit<span className={footer.bottomSpan}>Able</span>
</p>
  {/* <div className={footer.bottomRight}> */}
  <p>Copyright ©2023 Charitable. All rights reserved</p>
    <p>Terms & Agreement </p>
    <p>Privacy Policy</p>
  </div>
{/* </div> */}
    </footer>
  )
}

export default Footer