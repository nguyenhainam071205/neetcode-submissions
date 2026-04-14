class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    isOperator = (part) => {
        if(part === '+' || part === '-' || part === '*' || part === '/') return true;
        return false;
    }

    evaluate = (num1, num2, operator) => {
        if(operator === '+') return num1 + num2;
        if(operator === '-') return num1 - num2;
        if(operator === '*') return num1 * num2;
        else return Math.trunc(num1 / num2);
    }

    evalRPN(tokens) {
        const n = tokens.length;
        let stack = [];
        for(let i = 0; i < n; i++) {
            if(!this.isOperator(tokens[i])) {
                stack.push(Number(tokens[i]));
            } else {
                let num1 = stack.pop();
                let num2 = stack.pop();
                let tmp = this.evaluate(num2, num1, tokens[i]);
                stack.push(tmp);
            }
        }

        return stack.pop();
    }
}
