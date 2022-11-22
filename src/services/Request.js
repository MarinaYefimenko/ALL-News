
class Request {

    _apiBase = 'https://newsapi.org/v2/top-headlines';
    _apiKey = 'apiKey=886798947270417c90611c1e33485fab';

    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getMainNewsBE = async () => {
        let res = await this.getResource(`${this._apiBase}?country=ua&pageSize=17&${this._apiKey}`);
        return await (res.articles.map(this._transformNews));
    }

    getCategoryNews = async (cat) => {
        let res = await this.getResource(`${this._apiBase}?country=ua&category=${cat}&pageSize=100&${this._apiKey}`);
        return await (res.articles.map(this._transformNews));
    }

    _transformNews = (newItem) => {
        return({
            title: newItem.title,
            img: newItem.urlToImage,
            link: newItem.url,
            time: `${newItem.publishedAt.slice(0, 10).split('-').reverse().join('.')}  ${newItem.publishedAt.slice(11, 16)}` 
            }
        )
    }
}


export default Request;