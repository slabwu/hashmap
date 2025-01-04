export class linkedList {
    #list;
    #tail;
    #head;
    constructor() {
        this.#list = undefined;
    }

    append(value) {
        if (this.#list === undefined) {
            this.initialise(value);
        } else {
            this.#tail.next = new Node(value, null);
            this.#tail = this.#tail.next;
        }
    }

    prepend(value) {
        if (this.#list === undefined) {
            this.initialise(value);
        } else {
            this.#head = new Node(value, this.#head);
        }
    }

    toString() {
        if (this.#list === undefined) {
            console.log('Unable to print empty list');
            return;
        }

        let output = '';
        let node = this.#head;
        while(node !== null) {
            output += `( ${node.value} ) -> `;
            node = node.next;
        }
        console.log(output + 'null');
    }

    initialise(value) {
        this.#list = new Node(value, null);
        this.#head = this.#list;
        this.#tail = this.#list;
    }

    get size() {
        let size = 0;
        let node = this.#head;
        while(node !== null) {
            size++;
            node = node.next;
        }
        return size;
    }

    get head() {
        return this.#head.value;
    }

    get tail() {
        return this.#tail.value;
    }

    at(index, check = false) {
        let node = this.#head;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }
        return (check === false)? node.value : node;
    }

    pop() {
        this.#tail = this.at(this.size - 2, true);
        this.#tail.next = null;
    }

    contains(value) {
        let node = this.#head;
        while (node !== null) {
            if (node.value === value) return true; 
            node = node.next;
        }
        return false;
    }

    find(value) {
        let node = this.#head;
        let index = 0;
        while (node !== null) {
            if (node.value === value) return index; 
            index++;
            node = node.next;
        }
        return null;
    }

    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
        } else if (index === this.size - 1) {
            this.append(value);
        } else if (index > this.size - 1) {
            console.log('Index does not exist');
            return;
        } else {
            this.at(index - 1, true).next = new Node(value, this.at(index, true));
        }
    }

    removeAt(index) {
        if (index === 0) {
            this.#head = this.#head.next;
        } else if (index === this.size - 1) {
            this.pop();
        } else if (index > this.size - 1) {
            console.log('Index does not exist');
            return;
        } else {
            this.at(index - 1, true).next = this.at(index + 1, true);
        }
    }
}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}