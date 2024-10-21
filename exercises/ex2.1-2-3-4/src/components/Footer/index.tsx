import './Footer.css'
interface FooterProps {
    children : React.ReactNode,
    url_image : string;
}

const Footer = (props: FooterProps) => {
    return <footer>
        <div>{props.children}</div>
        <img src={props.url_image} className="footer-image"/>
    </footer>;
  };

  export default Footer;