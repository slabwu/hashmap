import { linkedList } from './linkedList.js'

export class HashSet {
    #buckets;
    #loadFactor;
    #capacity;
    #length;
    constructor() {
        this.#capacity = 16;
        this.#loadFactor = 0.75;
        this.#buckets = Array(this.#capacity);
        this.#length = 0;
    }

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode;
    }

    set(key) {
        if (!this.has(key)) {
            if (this.#length >= this.#capacity * this.#loadFactor) {
                this.#capacity *= 2;
                let keys = this.keys();
                this.clear();
                keys.forEach(entry => this.set(entry));
            }
    
            if (this.#buckets[this.hash(key) % this.#capacity] === undefined) {
                this.#buckets.splice(this.hash(key) % this.#capacity, 1, new linkedList());
            }
    
            this.#buckets[this.hash(key) % this.#capacity].append(key);
            this.#length++;
        }
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
        this.#length--;
        return bucket.delete(key);
    }

    bucket(key) {
        return this.#buckets[this.hash(key) % this.#capacity];
    }

    length() {
        return this.#length;
    }

    clear() {
        this.#buckets.length = 0;
        this.#buckets = Array(this.#capacity);
        this.#length = 0;
    }

    keys() {
        let output = [];
        this.#buckets.forEach(bucket => {
            if (bucket) {
                output = output.concat(bucket.entries());
            }
        })
        return output;
    }
}