import NewsCard from './newsCard';
import { NEWS_PER_PAGE } from '../constants/constants'
class NewsCardList{
    constructor(articles){
        this.articles =articles;
        this.articlesList = document.querySelector('.articles__list'); 
        this.startNumber = 0;
        this.renderResults = this.renderResults.bind(this);
        this.toggleMoreBtn = this.toggleMoreBtn.bind(this)
        this.more = this.more.bind(this)
    }

    renderLoader(){
        this.startNumber = 0;
        this.articlesList.innerHTML=(
            `
            <div class="articles__loading">
                <div class="articles__loading-preloader"></div>
                <p class="articles__loading-title">Идет поиск новостей...</p>
            </div>
            `
        )
    }

    renderResults(){
        const {articles, articlesList, startNumber} = this
        if (articles.length !==0 ){
            if (startNumber===0){
                articlesList.innerHTML=''
            }
            console.log(articles);            
            for (let i = startNumber; i<articles.length && i<startNumber+NEWS_PER_PAGE ; ++i){
                
                const card = new NewsCard(articles[i]);
                articlesList.innerHTML += card.create()
            }
            this.startNumber = startNumber + NEWS_PER_PAGE;
        }
        else{
            articlesList.innerHTML=(
                `
              <div class="articles__not-found">
                <img src="../../../images/not-found-v1.png" alt="" class="articles__not-found-image">
                <p class="articles__not-found-title">Ничего не найдено</p>
                <p class="articles__not-found-subtitle">К сожалению по вашему запросу
                  ничего не найдено.</p>
              </div>
            `)
        }
        return articlesList;
    }

    more(){
        if (this.startNumber<this.articles.length){
            const results = this.renderResults();
            this.toggleMoreBtn();
            return results;
        }
    }

    toggleMoreBtn(){
        document.querySelector('.articles__button').disabled = !(this.startNumber < this.articles.length);
    }

    setArticles(articles){
        this.startNumber = 0;
        this.articles = articles
    }

}

export default NewsCardList;