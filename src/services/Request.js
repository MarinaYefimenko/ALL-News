
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
        let res = await this.getResource(`${this._apiBase}?country=be&pageSize=5&${this._apiKey}`);
        return await (res.articles.map(this._transformNews));
    }

    _transformNews = (newItem) => {
        return({
            title: newItem.title,
            img: newItem.urlToImage,
            link: newItem.url
            }
        )
    }
}

export default Request;