const timeFormat = (timekey) => {
  const ti = new Date(timekey);
  return `${ti.getFullYear()}/${ti.getMonth() + 1}/${ti.getDate()} ${ti.getHours()}:${ti.getMinutes()}:${ti.getSeconds()}`;
};

export default timeFormat;
