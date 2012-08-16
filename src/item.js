function Item(type, shelf_price) {

    var round_up_to_nearest_point_zero_five = function (number_to_round) {
        return Math.ceil(number_to_round * 20) / 20
    }

    var sum_two_monetary_values = function (number1, number2) {
        return ((number1*100) + (number2*100))/100;
    }

    var tax = function () {
        var tax_before_rounding;

        switch (type) {
            case "book":
            case "chocolate bar":
                tax_before_rounding = 0;
                break;
            default :
                tax_before_rounding = 10 * shelf_price / 100;
        }

        return round_up_to_nearest_point_zero_five(tax_before_rounding);
    }

    var price_including_tax = function () {
        return sum_two_monetary_values(shelf_price, tax());
    }


    return {
        type:type,
        price_including_tax:price_including_tax,
        tax:tax
    };
}
;

