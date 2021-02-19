import {API_KEY,NEWS_API_BASE} from '../constants/constants'
class NewsApi{
    
    constructor(from, to, sortBy, pageSize, language) {
        
        this.from = from;
        this.to = to;
        this.sortBy = sortBy;
        this.pageSize = pageSize;
        this.language = language;
        this.apiKey = API_KEY;
    }
    async getNews(q){
        const query = q || '*';
        const url = `${NEWS_API_BASE}?apiKey=${this.apiKey}&q=${query}&from=${this.from}&to=${this.to}&sortBy=${this.sortBy}&pageSize=${this.pageSize}`;
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