// ArrayList is a resizing Array class,
// assuming the original array of JavaScript does not auto resize.
class ArrayList {
  constructor(length) {
    this.capacity = length;
    this.length = 0;
    this.arr = [];
  }

  insert(val) {
    if (this.length >= this.capacity) {
      this.resize();
    }
    this.arr[this.length] = val;
    this.length ++;
  }

  resize() {
    this.capacity *= 2; //double size
    const newArr = [];
    for (let i = 0; i < this.arr.length; i++) {
      newArr[i] = this.arr[i];
    }
    this.arr = newArr;
  }

  toString() {
    console.log(this.capacity, this.length, this.arr);
  }
}

const a = new ArrayList(4);
a.toString();
a.insert(1);
a.insert(4);
a.insert(5);
a.insert(6);
a.insert(7);
a.toString();
