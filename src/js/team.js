export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    this.members.forEach((item) => {
      if (JSON.stringify(item) === JSON.stringify(character)) {
        throw new Error('The character has already been added');
      }
    });
    this.members.add(character);
  }

  addALL(...arr) {
    arr.forEach((item) => {
      this.members.add(item);
  });
  return this;
}

toArry() {
  return Array.from(this.members);
}
}