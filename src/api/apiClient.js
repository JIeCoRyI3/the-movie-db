let instance = null;
export class ApiClient {
    apiBase = 'https://api.themoviedb.org/3';
    constructor(apiKey) {
        this.apiKey = apiKey;
        instance = instance || this;
        return instance;
    }

    postGlobalResource = async (url, data = null, headers, method, jsonNeed = false) => {
        const res = await fetch(`${this.apiBase}${url}`,
            {
                method,
                body: data ? JSON.stringify(data) : null,
                headers: headers || null,
            });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}`
                + `, received ${res.status}`);
        }
        if (jsonNeed) {
            return await res.json();
        }
        return await res;
    };

    createFilterString(obj) {
        let filterString = `?api_key=${this.apiKey}&`;
        for(const [key, value] of Object.entries(obj)) {
            filterString += `${key}=${value}&`;
        }
        return filterString.slice(0, -1);
    }

    //  filter
    filterBy = async (filterObj) => await this.postGlobalResource( `/search/movie` + this.createFilterString(filterObj), null, null, 'GET', true);

    //  details
    detailsFromFilm = async (id) => await this.postGlobalResource(`/movie/${id}` + this.createFilterString(), null, null, 'GET', true);

    //  genres
    getAllGenres = async () => await this.postGlobalResource(`/genre/movie/list` + this.createFilterString(), null, null, 'GET', true);
    filterWithGenres = async (genreObj) => await this.postGlobalResource(`/discover/movie/` + this.createFilterString(genreObj), null, null, 'GET', true)
}
