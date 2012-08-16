describe("Receipt printer", function () {

    beforeEach(function () {
        $('#generated-receipt').remove();
        $('body').append('<div id="generated-receipt"/>');
    });

    it("prints an itemised receipt including a tax breakdown", function () {
        var receipt_for_book = Receipt();
        receipt_for_book.add_item('book', 12.49);
        receipt_for_book.add_item('music CD', 14.99);
        receipt_for_book.add_item('chocolate bar', 0.85);
        receipt_for_book.print();

        expect($('#generated-item-list')).toContainHtml('1 book 12.49<br>');
        expect($('#generated-item-list')).toContainHtml('1 music CD 16.49<br>');
        expect($('#generated-item-list')).toContainHtml('1 chocolate bar 0.85<br>');
        expect($('#generated-tax')).toHaveText('Sales Taxes: 1.50');
        expect($('#generated-total')).toHaveText('Total: 29.83');
    });


});