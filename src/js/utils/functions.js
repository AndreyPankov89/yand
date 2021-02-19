import NewsApi from '../api/newsApi';
import MainApi from '../api/mainApi'
import NewsCardList from '../components/newsCardList';
import {RESULT_COUNT} from '../constants/constants';
import Form from '../components/form'
const formApiDate = (date)=>{

    const day = (date.getDate() < 10) ? ('0' + date.getDate()) : date.getDate();
    const month = (date.getMonth() + 1 < 10) ? ('0' + (date.getMonth() + 1)) : date.getMonth() + 1;
    const year = date.getFullYear();

    return year + '-' + month + '-' + day;
}
const FormDispDate = (rawDate)=>{
    const date = new Date(rawDate);
    const day = (date.getDate() < 10) ? ('0' + date.getDate()) : date.getDate();
    const month = (date.getMonth() + 1 < 10) ? ('0' + (date.getMonth() + 1)) : date.getMonth() + 1;
    const year = date.getFullYear();
    return day + '.' + month + '.' + year;
}
const getNews = (query)=>{
    const toDate = new Date();
    const fromDate =  new Date(toDate - 60 * 60 * 24 * 7 * 1000);
    const newsApi = new NewsApi(
        formApiDate(fromDate),
        formApiDate(toDate),
        "publishedAt",
        RESULT_COUNT,
        "ru"
    )
    const articlesContainer = document.querySelector('.articles__list')
    const newsCardList = new NewsCardList([]);
    newsCardList.renderLoader();
    newsApi.getNews(query)
        .then((result)=>{
            console.log(result);
            newsCardList.setArticles(result.articles);
            //articlesContainer.innerHTML = '<h2 class="articles__result">Результаты поиска</h2'+articlesContainer.innerHTML
            //articlesContainer.appendChild(newsCardList.renderResults());
            newsCardList.renderResults();
            //articlesContainer.innerHTML+= '<button class="articles__button">Показать еще</button>';
            document.querySelector('.articles__button').addEventListener('click',newsCardList.more)
            newsCardList.toggleMoreBtn()
        })
        .catch((err)=>{
            articlesContainer.innerHTML = "error"
            console.error(err)
        })

}

const signUp = (data)=>{
    const mainApi = new MainApi();
    mainApi.signup(data)
        .then((res)=>{
            console.log(res);
        })
}
export { formApiDate, getNews, FormDispDate, signUp }