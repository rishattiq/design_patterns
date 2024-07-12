
interface Print {
    printDetails(): void;
}


abstract class Shape implements Print {
    abstract calculateArea(): number;

    printDetails(): void {
        console.log(`Area: ${this.calculateArea()}`);
    }
}

class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculateArea(): number {
        return (Math.PI * this.radius ** 2);//pi*r^2
    }
}


class Square extends Shape {
    private length: number;

    constructor(length: number) {
        super();
        this.length = length;
    }

    calculateArea(): number {
        return (this.length ** 2);//l^2
    }
}


class Triangle extends Shape{
    private base:number;
    private height:number;

    constructor(base:number,height:number){
        super();
        this.base=base;
        this.height=height;
    }

    calculateArea(): number {
        return (1/2 *this.base* this.height);
    }
}

class Printer {
    print(shape: Print): void {
        shape.printDetails();
    }
}


const circle = new Circle(2);
const square = new Square(2);
const triangle = new Triangle(2,2);
const printer = new Printer();

console.log('Circle details:');
printer.print(circle);
console.log(' ');

console.log('Square details:');
printer.print(square);
console.log(' ');


console.log('Triangle details: ');
printer.print(triangle);
