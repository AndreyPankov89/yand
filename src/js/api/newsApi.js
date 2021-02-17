import {API_KEY} from '../constants/constants'
class NewsApi{
    
    constructor(from, to, sortBy, pageSize, language) {
        
        this.from = from;
        this.to = to;
        this.sortBy = sortBy;
        this.pageSize = pageSize;
        this.language = language;
        this.apiKey = API_KEY;
    }
    async getNews(query){
        const url = `https://nomoreparties.co/news/v2/everything?apiKey=${this.apiKey}&q=${query}&from=${this.from}&to=${this.to}&sortBy=${this.sortBy}&pageSize=${this.pageSize}`;
        console.log(query);
        
        console.log('getnews',url);
        
        const res = await fetch(url);
        if (!res.ok){
            throw new Error(res.status);
        }
        const result = await res.json();
        console.log(result);
        
        return result
    }
}

export default NewsApi