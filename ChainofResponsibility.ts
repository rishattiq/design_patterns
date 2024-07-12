
//can transfer the responsilbity to next if u dont need it

interface Handler<Request = string, Result = string> {
    setNext(handler: Handler<Request, Result>): Handler<Request, Result>;

    handle(request: Request): Result;
}

abstract class AbstractHandler implements Handler<string, string> {
    private nexthandler: Handler<string, string> | null = null;

    public setNext(handler: Handler<string, string>): Handler<string, string> {
        this.nexthandler = handler;
        return handler;
    }

    public handle(request: string): string {
        if (this.nexthandler) {
            return this.nexthandler.handle(request);
        }

        return 'Request not handled';
    }
}

class Monkey extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'banana') {
            return `Monkey: I will eat the ${request}`;
        }

        return super.handle(request);
    }
}

class Squirrel extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'nuts') {
            return `Squirrel: I will eat the ${request}`;
        }

        return super.handle(request);
    }
}

class Donkey extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'grass') {
            return `Donkey: I will eat the ${request}`;
        }

        return super.handle(request);
    }
}

function clientcode(handler: Handler<string, string>) {
    const foods = ['banana', 'coffee', 'tea', 'nuts'];

    for (const food of foods) {
        console.log(`Who wants the ${food}?`);

        const result = handler.handle(food);

        if (result) {
            console.log(`${result}`);
        } else {
            console.log(`${food} is left untouched`);
        }
    }
}

const monkey = new Monkey();
const squirrel = new Squirrel();
const donkey = new Donkey();

monkey.setNext(squirrel).setNext(donkey);

console.log('Chain: Monkey > Squirrel > Donkey\n');
clientcode(monkey);
console.log('');

console.log('Subchain: Squirrel > Donkey\n');
clientcode(squirrel);
