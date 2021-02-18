import NewsCard from './newsCard'
class NewsCardList{
    constructor(articles){
        this.articles =articles;
        this.articlesBlock = document.createElement('div');
        this.articlesBlock.classList.add('articles__list'); 
    }

    renderLoader(){
        return (
            `
            <div class="articles__loading">
                <div class="articles__loading-preloader"></div>
                <p class="articles__loading-title">Идет поиск новостей...</p>
            </div>
            `
        )
    }

    renderResults(){
        const {articles, articlesBlock} = this
        if (articles){
            console.log(articles);
            
            articles.forEach(item=>{
                const card = new NewsCard(item);
                articlesBlock.innerHTML += card.create()
            })
            console.log(articlesBlock.outerHTML);
            return articlesBlock.outerHTML;
        }
        else{
            return (
                `
              <div class="articles__not-found">
                <img src="<%=require('./images/not-found-v1.png')%>" alt="" class="articles__not-found-image">
                <p class="articles__not-found-title">Ничего не найдено</p>
                <p class="articles__not-found-subtitle">К сожалению по вашему запросу
                  ничего не найдено.</p>
              </div>
            `)
        }
    }

    setArticles(articles){
        this.articles = articles
    }

}

export default NewsCardList;