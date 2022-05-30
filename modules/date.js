const dateTime = document.querySelector('#date');

/* eslint-disable no-undef */
const loadDate = () => {
  dateTime.innerHTML = luxon.DateTime.now().toLocaleString(
    luxon.DateTime.DATETIME_MED_WITH_SECONDS,
  );
};
/* eslint-disable no-undef */

setInterval(loadDate, 1000);

export { dateTime, loadDate };