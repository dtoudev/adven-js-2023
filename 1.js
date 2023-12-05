const gifts = [1, 2, 3, 1, 3, 7]

function findFirstRepeated(gifts) {
    const numerosVistos = new Set()

    for (let i = 0; i < gifts.length; i++) {
        if (numerosVistos.has(gifts[i])) {
            return gifts[i]
        } else {
            numerosVistos.add(gifts[i])
        }
    }

    return -1
}

console.log(findFirstRepeated(gifts))