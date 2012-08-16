function Item(type, shelf_price) {

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

        return MoneyMath.rounded_to_nearest_point_zero_five(tax_before_rounding);
    }

    var price_including_tax = function () {
        return MoneyMath.sum_of(shelf_price, tax());
    }


    return {
        type:type,
        price_including_tax:price_including_tax,
        tax:tax
    };
}
;

