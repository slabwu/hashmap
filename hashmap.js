export function test(text) {
    console.log(text);
}

export class HashMap {
    #buckets;
    #loadFactor;
    #capacity;
    constructor() {
        this.#buckets = Array(16);
        this.#loadFactor = 0.75;
    }

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode;
    }
}