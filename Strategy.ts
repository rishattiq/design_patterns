//make objects in different classes to perform some algorithms

class Context{

    private strategy : Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public somelogic() : void{

        console.log('sorting data using some logic');

        const result = this.strategy.doAlgorithm(['a','b','c','b','d','c']);
        console.log(result.join(','));
    
    }

}


class concreteStrategyA implements Strategy{


    public doAlgorithm(data: string[]): string[] {
        
        return data.sort();

    }

}


class concreteStrategyB implements Strategy{


    public doAlgorithm(data: string[]): string[] {
        
        return data.reverse();

    }

}


const context = new Context(new concreteStrategyA);
console.log('normal sorting');
context.somelogic();

context.setStrategy(new concreteStrategyB);
console.log('revese sorting');
context.somelogic();



interface Strategy {
    doAlgorithm(data: string[]): string[];
}