import NewsApi from '../api/newsApi';
import NewsCardList from '../components/newsCardList'
const formApiDate = (date)=>{

    const day = (date.getDate() < 10) ? ('0' + date.getDate()) : date.getDate();
    const month = (date.getMonth() + 1 < 10) ? ('0' + (date.getMonth() + 1)) : date.getMonth() + 1;
    const year = date.getFullYear();

    return year + '-' + month + '-' + day;
}

const getNews = (query)=>{
    const toDate = new Date();
    const fromDate =  new Date(toDate - 60 * 60 * 24 * 7 * 1000);
    const newsApi = new NewsApi(
        formApiDate(fromDate),
        formApiDate(toDate),
        "publishedAt",
        "10",
        "ru"
    )
    const articlesContainer = document.querySelector('.articles__container')
    const newsCardList = new NewsCardList([]);
    articlesContainer.innerHTML = newsCardList.renderLoader();
    newsApi.getNews(query)
        .then((result)=>{
            console.log(result);
            newsCardList.setArticles(result.articles);
            articlesContainer.innerHTML = '<h2 class="articles__result">Результаты поиска</h2'
            articlesContainer.innerHTML += newsCardList.renderResults()
            articlesContainer.innerHTML+= '<button class="articles__button">Показать еще</button>'
        })
        .catch((err)=>{
            articlesContainer.innerHTML = "error"
        })

}
export { formApiDate, getNews }