export const formatDate = (dateString) => {
    try {
        const convertedToDate = new Date(dateString);

        const publishYear = convertedToDate.getFullYear();
        const publishMonth = convertedToDate.getMonth() + 1;
        const publishDate = convertedToDate.getDate();

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
