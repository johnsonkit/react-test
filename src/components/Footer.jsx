const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="image--item__wrapper">
          <div className="image--item">
            <img src="/images/wcag2.1AA.png" alt="wcag2.1AA" />
          </div>
          <div className="image--item">
            <img src="/images/footer-wfa.png" alt="WFA" />
          </div>
        </div>

        <div className="link--item__wrapper">
          <div className="link--item">
            <a href="/">Important Legal Notices</a>
          </div>
          <div className="link--item">
            <a href="/">Sitemap</a>
          </div>
          <div className="link--item">
            <a href="/">Accessibility </a>
          </div>
        </div>

        <div className="term">Copyright © AIO Study Platform</div>
      </div>
    </footer>
  );
};

export default Footer;
