function parentFunc<T>(name: T): Function {
    const letter = "Name is";
    function closureFunc(): string {
        return 'letter' + name;
    }

    return closureFunc;
}

const parentName = parentFunc('Tony');
console.log(parentName);