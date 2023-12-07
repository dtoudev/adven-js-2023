function findNaughtyStep(original, modified) {
    for (let i = 0; i < original.length; i++) {
        if (original[i] !== modified[i]) {
            if (original.length > modified.length) {
                return original[i]
            }
            return modified[i]
        }
    }

    if (original.length === modified.length)
        return ''

    return modified[original.length]
}
const original = 'abcde'
const modified = 'abcde'
console.log(findNaughtyStep('xxxx', 'xxoxx'))