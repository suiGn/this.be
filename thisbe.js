// this.be.js
class ThisBe {
  constructor(initialState = {}) {
    this.state = initialState;
  }

  setState(key, value) {
    this.state[key] = value;
  }

  getState(key) {
    return key ? this.state[key] : this.state;
  }

  deleteState(key) {
    delete this.state[key];
  }
}

module.exports = ThisBe;