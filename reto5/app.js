const date1 = new Date("Dec 1, 2021");
// daysToXmas(date1); // 24
// const date2 = new Date("Dec 24, 2021 00:00:01");
// daysToXmas(date2); // 1
// const date3 = new Date("Dec 24, 2021 23:59:59");
// daysToXmas(date3); // 1
// const date4 = new Date("December 20, 2021 03:24:00");
// daysToXmas(date4); // 5

// const date = new Date("Dec 25, 2021");
// daysToXmas(date); // 0
// const date1 = new Date("Dec 26, 2021");
// daysToXmas(date1); // -1
// const date2 = new Date("Dec 31, 2021");
// daysToXmas(date2); // -6
// const date3 = new Date("Jan 1, 2022 00:00:01");
// daysToXmas(date3); // -7
// const date4 = new Date("Jan 1, 2022 23:59:59");
// daysToXmas(date4); // -7

// como la respuesta sera en segundo llevare de segundo a dias 60seg 60min 24h y 1000 para quitar el restante
let a = Math.ceil((new Date("Dec 25, 2021") - date1) / (60 * 60 * 24 * 1000));
console.log(a);

console.log(new Date("Jan 2, 2021") - new Date("Jan 1, 2021"));
