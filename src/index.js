import "./style.css";
import Header from './js/components/header';
import Form from './js/components/form';
import { getNews, signUp, signIn } from './js/utils/functions';

const header = new Header();
header.render({isLoggedIn: false, userName:''});

const loginForm = new Form('form[name="login"]');
loginForm.setEventListeners((e)=>{signIn(e)})
console.log(loginForm);

const signupForm = new Form('form[name="signup"]');
signupForm.setEventListeners((e)=>{signUp(e)})
console.log(signupForm);

getNews('*');
const searchForm = new Form('form.search__form');
searchForm.setEventListeners((e)=>{console.log(e); getNews(e.query)})
console.log(searchForm);