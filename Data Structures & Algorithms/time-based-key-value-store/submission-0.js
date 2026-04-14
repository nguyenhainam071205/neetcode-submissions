class TimeMap {
    constructor() {
        this.map = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.map.has(key))
            this.map.set(key, []);
        this.map.get(key).push({val: value, time: timestamp});
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const list = this.map.get(key);
    if(!list) return "";

    let ans = "";
    let left = 0, right = list.length - 1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(list[mid].time === timestamp) {
            return list[mid].val;
        } else if(list[mid].time < timestamp) {
            ans = list[mid].val;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
    }
}
