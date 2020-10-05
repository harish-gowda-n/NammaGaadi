export default (distance, vehicle) => {
    var total_cost = 0;
    switch (vehicle) {
        case 'Piaggio Ape': {
            if (distance > 0 && distance <= 10)
                total_cost = distance * 125;
            else if (distance > 10 && distance <= 20)
                total_cost = distance * 120;
            else if (distance > 20 && distance <= 30)
                total_cost = distance * 110;
            else if (distance > 30)
                total_cost = distance * 100;
        } break
        case 'Tata Ace': {
            if (distance > 0 && distance <= 10)
                total_cost = distance * 200;
            else if (distance > 10 && distance <= 20)
                total_cost = distance * 185;
            else if (distance > 20 && distance <= 30)
                total_cost = distance * 170;
            else if (distance > 30)
                total_cost = distance * 155;
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