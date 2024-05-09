const gregMonthsEn = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]
const gregMonthsAr = [
    'يناير',
    'فبراير',
    'مارس',
    'ابريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمير',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر'
]
const weekNamesEn = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]
const weekNamesAr =[
    'الأحد',
    'الإثنين',
    'الثلاثاء',
    'الأربعاء',
    'الخميس',
    'الجمعة',
    'السبت',
];

const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
};
    
export {
    gregMonthsAr, gregMonthsEn, weekNamesEn, weekNamesAr, getDaysInMonth
}
