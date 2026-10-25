import { HashMap } from './hashMap.js';

export class HashSet {
    constructor() {
        this.map = new HashMap();
    }

    add(value) {
        this.map.set(value, true);
    }

    has(value) {
        return this.map.has(value);
    }

    remove(value) {
        return this.map.remove(value);
    }

    length() {
        return this.map.length();
    }

    clear() {
        this.map.clear();
    }

    keys() {
        return this.map.keys();
    }
}