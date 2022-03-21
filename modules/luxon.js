const DateNowString = () => {
  const date = new Date(Date.now());
  return `${date.toUTCString().slice(0, 16)}`;
};
export default DateNowString;