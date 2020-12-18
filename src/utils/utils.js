export const formatDate = (dateString) => {
    if (dateString.length === 10) {
        const splittedDate = dateString.split('-');
        const reversedDate = splittedDate.reverse();

        return reversedDate.join('.');
    } else {
        throw new Error('Incorrect input date');
    }
};

export const getSearchParams = (search) => {
    const urlSearch = search.substring(1);
    const searchParams = new URLSearchParams(urlSearch);
    const params = {};

    for (const [key, value] of searchParams) {
        params[key] = value;
    }
    return params;
};
