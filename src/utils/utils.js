export default function generateRandomId() {
  return Math.floor(Math.random() * (999 - 100 + 1)) + 100;
}
