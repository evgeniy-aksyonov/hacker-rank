const dates = [
  '01 Mar 2017',
  '03 Feb 2017',
  '15 Jan 1998'
];
// const dates = [
//   '20 Oct 2052',
//   '06 Jun 1933',
//   '26 May 1960',
//   '20 Sep 1958',
//   '16 Mar 2068',
//   '25 May 1912',
//   '16 Dec 2018',
//   '26 Dec 2061',
//   '04 Nov 2030',
//   '28 Jul 1963'
// ];

function sortDates(dates) {
  const sorted = dates.sort(function (a, b) {
    return new Date(a).getTime() - new Date(b).getTime();
  });

  return sorted;
}