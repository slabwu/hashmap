import { linkedList } from './linkedList.js'

export function test(text) {
    console.log(text);
}

export class HashMap {
    #buckets;
    #loadFactor;
    #capacity;
    constructor() {
        this.#capacity = 16;
        this.#loadFactor = 0.75;
        this.#buckets = Array(this.#capacity);
        console.log(this.#buckets);
    }

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode;
    }

    set(key, value) {
        let index = this.hash(key) % this.#capacity;
        if (this.#buckets[index] === undefined) {
            this.#buckets.splice(index, 1, new linkedList());
        }
        this.#buckets[index].append(key, value);

        console.log(this.#buckets);
    }

    get(key) {
        let bucket = this.bucket(key);
        if (bucket === undefined) return null;
        return bucket.find(key);
    }

    has(key) {
        let bucket = this.bucket(key);
        if (bucket === undefined) return false;
        return bucket.contains(key);
    }

    remove(key) {
        let bucket = this.bucket(key);
        if (bucket === undefined) return false;
        return bucket.delete(key);
    }

    bucket(key) {
        return this.#buckets[this.hash(key) % this.#capacity];
    }

    length() {
        let length = 0;
        this.#buckets.forEach(bucket => {
            if (bucket) {
                length += bucket.size;
            }
        });
        return length;
    }
}