export default (distance, vehicle) => {
    var total_cost = 0;
    switch (vehicle) {
        case 'Piaggio Ape': {
            total_cost = 300
            if(distance > 4){
                total_cost += (distance - 4) * 10
            }
        } break
        case 'Tata Ace': {
            total_cost = 400
            if(distance > 4){
                total_cost += (distance - 4) * 16
            }
        } break
        case 'Tata 407': {
            if (distance > 0 && distance <= 10)
                total_cost = distance * 280;
            else if (distance > 10 && distance <= 20)
                total_cost = distance * 265;
            else if (distance > 20 && distance <= 30)
                total_cost = distance * 250;
            else if (distance > 30)
                total_cost = distance * 235;

        } break
        case 'Eicher Canter': {
            if (distance > 0 && distance <= 10)
                total_cost = distance * 220;
            else if (distance > 10 && distance <= 20)
                total_cost = distance * 205;
            else if (distance > 20 && distance <= 30)
                total_cost = distance * 190;
            else if (distance > 30)
                total_cost = distance * 175;
        } break
        default: {
        }
    }
    total_cost += (total_cost * 10) / 100
    return total_cost.toFixed(2)
}