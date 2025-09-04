// -----------------TASK 20---------------------------
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Getter
  get area() {
    return this.width * this.height;
  }

  // Setter
  set changeWidth(newWidth) {
    if (newWidth > 0) {
      this.width = newWidth;
    } else {
      console.log("Width must be positive!");
    }
  }
}

const r = new Rectangle(10, 5);
console.log(r.area);  

r.changeWidth = 20;   
console.log(r.area);  
