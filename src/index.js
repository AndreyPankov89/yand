import "./style.css";
import Header from './js/components/header';


const header = new Header();
header.render({isLoggedIn: false, userName:''});