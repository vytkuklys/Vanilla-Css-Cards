
export function getFormattedDate(dateISO) {
    let day, month, year;
    const date = new Date(dateISO);
    const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        year: 'numeric',
        month: 'long',
    });
    longEnUSFormatter.formatToParts(date).map(({ type, value }) => {
        switch (type) {
            case 'day': day = value; return null;
            case 'year': year = value; return null;
            case 'month': month = value; return null;
            default: return null;
        }
    });
    return (`${day} ${month} ${year}`);
}

