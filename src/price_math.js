function MoneyMath (){
}


MoneyMath.rounded_to_nearest_point_zero_five = function (number_to_round) {
    return Math.ceil(number_to_round * 20) / 20
}

MoneyMath.sum_of = function (number1, number2) {
    return ((number1 * 100) + (number2 * 100)) / 100;
}