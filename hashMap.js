export class HashMap {
    constructor() {
        this.key = key;
        this.value = value;
        this.capacity = 16;
        this.loadFactor = 0.75;
        this.buckets = Array.from( {length: this.capacity} , () => []);
        this.size = 0;
    }
    
    hash(key) {
        
        let hashCode = 0;

        const primeHash = 31;
        for (let i = 0 ; i < key.length ; i++) {
            hashCode = primeHash * hashCode + key.charCodeAt(i);
            hashCode = hashCode % (this.capacity);
        }

        return hashCode;
    }

    checkIndex(index) {
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
    }

    set(key, value) { 
        let bucket = this.hash(key);

    }



}