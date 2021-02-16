class MainApi{
    constructor(){
        this._baseURL = "http://www.news-explorer.students.nomoreparties.xyz";
    }

    async _postData(url, data){
        const res = await fetch(url, data);
        if (!res.ok){
            throw new Error(res.status);
        }

        return await res.json;
    }
    async signup(user){
        const url = this._baseURL+'/signup';
        const data = {
            method: 'POST', 
            credentials: "include",
            body: JSON.stringify(user), 
            headers: {
              'Content-Type': 'application/json'
            }
        }

        return await this._postData(url,data);
    }
    async signin(user){
        const url = this._baseURL+'/signup';
        const data = {
            method: 'POST',     
            credentials: "include",
            body: JSON.stringify(user), 
            headers: {
              'Content-Type': 'application/json'
            }
        }

        return await this._postData(url,data);
    }

    async getUserData(){
        const url = this._baseURL+'/users/me';
        const data = { 
            credentials: "include",
        }
        return await this._postData(url,data);
    }


    async getArticles(){
        const url = this._baseURL+'/articles';
        const data = {
            credentials: "include",
        }
        return await this._postData(url,data)
    }
    
    async createArticles(article){
        const url = this._baseURL+'/articles';
        const data = {
            method: 'POST',     
            credentials: "include",
            body: JSON.stringify(article), 
            headers: {
              'Content-Type': 'application/json'
            }
        }
        return await this._postData(url,data)
    }

    async deleteArticles(id){
        const url = this._baseURL+'/articles/+id';
        const data = {
            method: 'DELETE',     
            credentials: "include"
        }
        return await this._postData(url,data)
    }
}

export default MainApi;