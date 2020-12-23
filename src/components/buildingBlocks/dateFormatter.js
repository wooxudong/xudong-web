const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export default (rawDate) => {
  const date = new Date(rawDate);
  return date.toLocaleDateString(undefined, options);
};
