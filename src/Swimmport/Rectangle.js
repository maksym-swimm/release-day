// Declaration
class RectangleClass {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// Expression; the class is anonymous but assigned to a variable
const RectangleClass = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

// Expression; the class has its own name
const RectangleClass = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};