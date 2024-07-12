
//defines an interface but allow subclasses to make changes in it

abstract class creator{

    public abstract factorymethod(): Product;

    public someOperation() : string {

        const product = this.factorymethod();
        return `creator: the same creator code has worked with ${product.operation()}`;



    }
}

interface Product{

operation(): string;

}

class ConcreteCreator1 extends creator{

public factorymethod(): Product {
    
    return new ConcreteProduct1();
}

}


class ConcreteCreator2 extends creator{

    public factorymethod(): Product {
        
        return new ConcreteProduct2();
    }
    
    }


class ConcreteProduct1 implements Product{

    public operation(): string{
        return `{result of ConcreteProduct1}`
    }
}


class ConcreteProduct2 implements Product{

    public operation(): string{
        return `{result of ConcreteProduct2}`
    }
}

function clientcode(Creator: creator){

    console.log(`i am not aware of creator's class but it still works`)
    console.log(Creator.someOperation());


}

console.log(`App: Launched with ConcreteCreator1`);
clientcode(new ConcreteCreator1());

console.log(`App: Launched with ConcreteCreator2`);
clientcode(new ConcreteCreator2());
