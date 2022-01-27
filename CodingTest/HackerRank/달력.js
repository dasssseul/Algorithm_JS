// num1
// 정답 코드
let dates = ['20st Oct 2052', '28th Jul 1963'];
const monthObj = {
  Jan: '01',
  Feb: '02',
  Mar: '03',
  Apr: '04',
  May: '05',
  Jun: '06',
  Jul: '07',
  Aug: '08',
  Sep: '09',
  Oct: '10',
  Nov: '11',
  Dec: '12',
};
for (const date of dates) {
  let splitDate = date.split(' ').reverse();
  let year = splitDate[0];
  let month = monthObj[splitDate[1]];
  let day = splitDate[2].replace(/\D+/, '');
  if (day < 10) {
    day = '0' + String(day);
  }
  console.log(`${year}-${month}-${day}`);
}
