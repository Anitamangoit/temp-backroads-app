import { sociallinks } from "./data";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <div>
      <footer className="section footer">
        <PageLinks parentClass='footer-links' itemClass='footer-link'/>
       
        <ul className="footer-icons">
          {sociallinks.map((links)=>{
         
            return(

              <SocialLinks   key={links.id} {...links} itemClass='footer-icon'/>
              //   <li key={id}>
            //   <a
            //     href={href}
            //     target="_blank"
            //     className="footer-icon"
            //     rel="anjkkj"
            //   >
            //     <i className={icon}></i>
            //   </a>
            // </li>
            )
          })}
         
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
