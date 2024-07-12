

//provides interface for the related objects without specifying their concrete classes

interface Abstractfactory{

    createProductA(): AbstractProduct;
    createProductB(): AbstractProductB;
}

class ConcreteFactory1 implements Abstractfactory{

  public  createProductA(): AbstractProduct{

    return (new ConcreteProductA1());
    }

    public  createProductB(): AbstractProductB{

        return (new ConcreteProductB1());
        }
}

class ConcreteFactory2 implements Abstractfactory{

    public  createProductA(): AbstractProduct{

        return (new ConcreteProductA2());
        }
    
        public  createProductB(): AbstractProductB{
    
            return (new ConcreteProductB2());
            }
}

interface AbstractProduct{

    usefulfunctionA(): string;


}

class ConcreteProductA1 implements AbstractProduct {
    
    public usefulfunctionA(): string {
        return 'The result of the product A1.';
    }
}

class ConcreteProductA2 implements AbstractProduct {
    
    public usefulfunctionA(): string {
        return 'The result of the product A2.';
    }
}

interface AbstractProductB{

    usefulfunctionB(): string;
    anotherUsefulFunctionB(anotherfunction: AbstractProduct): string;
}

class ConcreteProductB1 implements AbstractProductB{

    public usefulfunctionB(): string {
        return `the result of product B1`;
    }

    public anotherUsefulFunctionB(anotherfunction: AbstractProduct): string {
        const result = anotherfunction.usefulfunctionA();
        return `the result of the function B1 is ${result}`
    }
}

class ConcreteProductB2 implements AbstractProductB{
    public usefulfunctionB(): string {
        return `the result of product B2`;
    }

    public anotherUsefulFunctionB(anotherfunction: AbstractProduct): string {
        const result = anotherfunction.usefulfunctionA();
        return `the result of the function B2 is ${result}`
    }
}

function clientcode(factory:Abstractfactory){

    const productA=factory.createProductA();
    const productB=factory.createProductB();

    console.log(productB.usefulfunctionB());
    console.log(productB.anotherUsefulFunctionB(productA))
}

console.log('Client: Testing client code with the first factory type...');
clientcode(new ConcreteFactory1());

console.log('');

console.log('Client: Testing the same client code with the second factory type...');
clientcode(new ConcreteFactory2());




