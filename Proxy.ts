
//acts as a substitue for the real subject

interface Subject{
    request():void;

}

class Realsubject implements Subject{

    public request():void{
        console.log('RealSubject: Handling request.');
    }
}

class Proxy1 implements Subject{

    private realSubject : Realsubject;


    constructor(realSubject: Realsubject) {
        this.realSubject = realSubject;
    }

    public request(): void {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }

    private checkAccess(): boolean {
       
        console.log('Proxy: Checking access prior to firing a real request.');

        return true;
    }

    private logAccess(): void {
        console.log('Proxy: Logging the time of request.');
    }
}

function clientCode(subject: Subject) {
    subject.request();
}

console.log('Client: Executing the client code with a real subject:');
const realSubject = new Realsubject();
clientCode(realSubject);

console.log('');

console.log('Client: Executing the same client code with a proxy:');
const proxy = new Proxy1(realSubject);
clientCode(proxy);

