export default class Api {
  constructor(mockdata, time) {
    this.mockdata = mockdata;
    this.time = time;
  }
  mockData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.mockdata);
      }, this.time);
    });
  }
}
