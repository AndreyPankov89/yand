

class NewsCard{
    constructor(info){
        this.info = info;
        
        ////
    }

    create(){
        const {urlToImage, publishedAt,title,description,url,source} = this.info
        const card = `
        <div class="articles__item">
            <div class="articles__flag"></div>
            <img src=${urlToImage} alt="" class="articles__article-image">
            <div class="articles__article-information">
                <p class="articles__article-date">${publishedAt}</p>
                <h2 class="articles__article-title">${title}</h2>
                <p class="articles__article-subtitle">${description}</p>
                <p class="articles__article-source">
                    <a href=${url} target="_blank">${source.name}</a>
                </p>
            </div>
        </div>
        `
        console.log(card);
        return card
    }
}

export default NewsCard;