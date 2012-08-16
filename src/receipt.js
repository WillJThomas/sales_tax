function Receipt () {
    var items = [];

     var add_item = function(type, shelf_price)
    {
        var item = Item(type, shelf_price)
        items.push(item)
    };

     var print = function()
    {
        var printed_receipt = $('#generated-receipt');
        printed_receipt.append('<div id="generated-item-list">');

        var item_list = $('#generated-item-list');
        var total_sale_amount = 0;
        var total_tax = 0;

        for(var i=0; i < items.length; i++) {
            item = items[i];
            item_list.append('1 ' + item.type + ' ' + item.price_including_tax() + '<br />');
            total_sale_amount = total_sale_amount + item.price_including_tax();
            total_tax = total_tax + item.tax();
        }

        printed_receipt.append('<div id="generated-tax"/>');
        var total_tax_element = $('#generated-tax');
        total_tax_element.append('Sales Taxes: ' + total_tax.toFixed(2));

        printed_receipt.append('<div id="generated-total"/>');
        var total_sale_amount_element = $('#generated-total');
        total_sale_amount_element.append('Total: ' + total_sale_amount);
    };

    return {
        add_item: add_item,
        print: print
    };
};

