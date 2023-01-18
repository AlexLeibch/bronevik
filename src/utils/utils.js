export const generateRandomId = () => {
  return Math.floor(Math.random() * (999 - 100 + 1)) + 100;
}

export const convertDate = (date) => {
  const dateArray = date.split('-');
  return `${dateArray[2]}.${dateArray[1]} ${dateArray[0]}`;
}
