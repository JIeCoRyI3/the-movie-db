export const formatDate = (dateString) => {
    try {
        const convertedToDate = new Date(dateString);

        const publishYear = convertedToDate.getFullYear();
        let publishMonth = convertedToDate.getMonth() + 1;
        let publishDate = convertedToDate.getDate();

        if (publishMonth < 10) publishMonth = '0' + publishMonth;
        if (publishDate < 10) publishDate = '0' + publishDate;

        const result = `${publishDate}.${publishMonth}.${publishYear}`;

        if (result.includes('NaN')) {
            throw new Error('Incorrect date string');
        } else {
            return result;
        }
    } catch (error) {
        return '';
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
