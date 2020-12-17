export const formatDate = (dateString) => {
    if (dateString.length === 10) {
        const splittedDate = dateString.split('-');
        const reversedDate = splittedDate.reverse();

        return reversedDate.join('.');
    } else {
        throw new Error('Incorrect input date');
    }
};
