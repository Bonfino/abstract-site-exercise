import "./Footer.css";

export default function Footer() {
  return (
    <footer className="pb-24 px-8 bg-black">
      <div className="pb-24	mx-20 flex footer relative">
        <div className="footer-item">
          <h3>Abstract</h3>
          <a href="">Start Trail</a>
          <a href="">Pricing</a>
          <a href="">Download</a>
        </div>
        <div className="footer-item">
          <h3>Resources</h3>
          <a href="">Blog</a>
          <a href="">Help center</a>
          <a href="">Release Notes</a>
          <a href="">Status</a>
        </div>
        <div className="footer-item">
          <h3>Community</h3>
          <a href="">Twitter</a>
          <a href="">Linkedin</a>
          <a href="">Facebook</a>
          <a href="">Dribbble</a>
          <a href="">Podcast</a>
        </div>
        <div className="footer-item">
          <h3>Company</h3>
          <a href="">About us</a>
          <a href="">Careers</a>
          <a href="" className="mb-7">
            Legal
          </a>
          <strong className="text-white">Conctat us</strong>
          <a href="">info@abstract.com</a>
        </div>
        <div className="footer-copyright">
          <p>© Copyright 2024</p>
          <p>Abstract Studio Design, Inc.</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
