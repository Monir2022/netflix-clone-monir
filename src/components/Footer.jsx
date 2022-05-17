// Project Files
import Facebook from "assets/icons/Facebook.png";
import Twitter from "assets/icons/Twitter.png";
import YouTube from "assets/icons/YouTube.png";
import Instagram from "assets/icons/Instagram.png";

export default function Footer() {
  return (
    <div id="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src={Facebook} alt=" " />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src={Instagram} alt=" " />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <img src={Twitter} alt=" " />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <img src={YouTube} alt=" " />
          </a>
        </div>
        <div className="contact-links">
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            FAQ
          </a>
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            Help Center
          </a>
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            Terms of Use
          </a>
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            Privacy
          </a>
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            Cookie Preferences
          </a>
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            Corporate information
          </a>
        </div>
      </div>
    </div>
  );
}
