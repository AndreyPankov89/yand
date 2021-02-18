import "./style.css";
import Header from './js/components/header';
import Form from './js/components/form';
import NewsApi from './js/api/newsApi';
import { formApiDate,getNews } from './js/utils/functions';

const header = new Header();
header.render({isLoggedIn: false, userName:''});

const loginForm = new Form('form[name="login"]');
loginForm.setEventListeners((e)=>{console.log(e)})
console.log(loginForm);

const signupForm = new Form('form[name="signup"]');
signupForm.setEventListeners((e)=>{console.log(e)})
console.log(signupForm);


const toDate = new Date();
const fromDate =  new Date(toDate - 60 * 60 * 24 * 7 * 1000);
const newsApi = new NewsApi(
    formApiDate(fromDate),
    formApiDate(toDate),
    "publishedAt",
    "100",
    "ru"
)
const searchForm = new Form('form.search__form');
searchForm.setEventListeners((e)=>{console.log(e); getNews(e.query)})
console.log(searchForm);