
//only one type of its kind existsand provides single point of excess


class Singleton{
    static #instance: Singleton;

    private constructor() {
    }


    public static get instance(): Singleton {
        if (!Singleton.#instance) {
            Singleton.#instance = new Singleton();
        }

        return Singleton.#instance;
    }


}

function clientCode() {
    const s1 = Singleton.instance;
    const s2 = null;

    if (s1 === s2) {
        console.log(
            'Singleton works, both variables contain the same instance.'
        );
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

clientCode();