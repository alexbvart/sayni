function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

export const formatDate = (date) => new Intl.DateTimeFormat('es', {
    year: 'numeric', month: 'long', day: 'numeric',
    hour: 'numeric', minute: 'numeric',
    hour12: false
}).format(date)

export function formatDateDDMMAA(date) {
    return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
    ].join('/');
}