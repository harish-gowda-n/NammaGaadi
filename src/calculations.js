export default (distance, vehicle) => {
    var total_cost = 0;
    switch (vehicle) {
        case 'Piaggio Ape':
            total_cost = 300
            if (distance > 4) {
                total_cost += (distance - 4) * 10
            }
            break
        case 'Tata Ace':
            total_cost = 400
            if (distance > 4) {
                total_cost += (distance - 4) * 16
            }
            break
        case 'Tata 407':
            if (distance < 20) {
                distance -= 5
                total_cost += (1200 + (distance * 20))
            } else {
                distance -= 20
                total_cost += (2000 + (distance * 20))
            }
            break
        case 'Eicher Canter':
            if (distance < 20) {
                distance -= 5
                total_cost += (1400 + (distance * 25))
            } else {
                distance -= 20
                total_cost += (2500 + (distance * 25))
            }
            break
        default: {
        }
    }
    total_cost += (total_cost * 10) / 100
    return total_cost.toFixed(2)
}