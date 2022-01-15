module.exports = function check(str, bracketsConfig) {
    return !str.split("").reduce((stack, item, index) => {
        if (bracketsConfig.includes(item)) return stack;
        if (!index) {
            stack.push(item);
            return stack;
        }

        checkingTheOpposite(stack[stack.length - 1], item, bracketsConfig)
            ? stack.pop()
            : stack.push(item);

        return stack;
    }, []).length;
};

function checkingTheOpposite(first, second, bracketsConfig) {
    return !!bracketsConfig.filter(
        (item) => item.includes(first) && item.includes(second, 1)
    ).length;
}
