import moment from 'moment';

export function convertDateToDayOfYear(date, isSouthernHemisphere) {
    let momentDate = moment(date, 'YYYY-MM-DD');
    if (!isSouthernHemisphere) {
        momentDate.subtract(6, 'months');
    }
    const year = momentDate.year();
    const firstDayOfYear = moment(year + '-01-01', 'YYYY-MM-DD');
    return momentDate.diff(firstDayOfYear, 'days');
}

export function convertDayOfYearToDate(dayOfYear, isSouthernHemisphere) {
    const year = moment().year();
    const firstDayOfYear = moment(year + '-01-01', 'YYYY-MM-DD');
    const date = firstDayOfYear.add(dayOfYear, 'days');
    if (!isSouthernHemisphere) {
        date.subtract(6, 'months');
    }
    return date.format('DD MMM')
}
