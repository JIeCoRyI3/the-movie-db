const getSearchParams = (search) => {
    const urlSearch = search.substring(1);
    const searchParams = new URLSearchParams(urlSearch);
    const params = {};

    for (const [key, value] of searchParams) {
        params[key] = value;
    }
    return params;
};

export default getSearchParams;
