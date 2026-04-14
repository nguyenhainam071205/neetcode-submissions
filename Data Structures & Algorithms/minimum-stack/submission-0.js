class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        let temp = [];
        let minNum = Infinity;

        while(this.stack.length > 0) {
            let top = this.stack[this.stack.length - 1];
            this.stack.pop();
            minNum = Math.min(minNum, top);
            temp.push(top);
        }

        for(let i = temp.length - 1; i >= 0; i--) {
            this.stack.push(temp[i]);
        }

        return minNum
    }
}
