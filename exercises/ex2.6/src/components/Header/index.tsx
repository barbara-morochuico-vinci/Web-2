import './Header.css';

interface HeaderProps {
    children : React.ReactNode,
    url_image : string;
  }
  
  const Header = (props: HeaderProps) => {
    return <header>
        <div>{props.children}</div>
        <img src={props.url_image}/>
    </header>;
  };

  export default Header;