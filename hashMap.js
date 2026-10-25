export class HashMap {
    constructor() {
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

    getBucket(key) {
        const bucket = this.hash(key);
        this.checkIndex(bucket);
        return this.buckets[bucket];
    }

    findEntry(key) {
        const bucketArray = this.getBucket(key);
        return bucketArray.find((pair) => pair.key === key);
    }

    set(key, value) { 
        const bucket = this.getBucket(key);
        const entry = bucket.find((pair) => pair.key === key);

        if (entry) {
            entry.value = value;
        } else {
            bucket.push({key, value});
            this.size++;
        }

        if (this.size / this.capacity > this.loadFactor) {
            this.resize();
        }
    }

    resize() {
        const entries = this.entries();
        this.capacity *= 2;
        this.buckets = Array.from( {length: this.capacity} , () => []);
        this.size = 0;

        for (const [key, value] of entries) {
            this.set(key, value);
        }
    }

    get(key) {
        return this.findEntry(key)?.value;
    }

    has(key) {
        const entry = this.findEntry(key);
        if (entry) {
            return true;
        }
        return false;
    }

    remove(key) {
        const bucket = this.getBucket(key);
        const index = bucket.findIndex((pair) => pair.key === key);

        if (index !== -1) {
            bucket.splice(index, 1);
            this.size--;
            return true;
        }

        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        this.capacity = 16;
        this.buckets = Array.from( {length: this.capacity} , () => []);
        this.size = 0;
    }

    entries() {
        return this.buckets.flatMap((bucket) => bucket.map((pair) => [pair.key, pair.value]));
    }

    keys() {
        return this.entries().map(([key]) => key);
    }

    values() {
        return this.entries().map(([, value]) => value);
    }

}
