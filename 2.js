function manufacture(gifts, materials) {
    let juguetesFabricados = []

    gifts.forEach(gift => {
        let puedeFabricarse = true
        for (let i = 0; i < gift.length; i++) {
            if (!materials.includes(gift[i])) {
                puedeFabricarse = false
                break
            }
        }

        if (puedeFabricarse) juguetesFabricados.push(gift)
    });
    return juguetesFabricados
}

console.log(manufacture(['coche', 'carro', 'che'], 'oche'))