/* Challenge 8: Paying back a friend

Nadia, Suzie and Katrina live together. They agreed to buy a kettle and three
mugs, and split the cost.

Nadia went to the shop and bought everything. Write a function to help her
figure out how much Suzie and Katrina owe her.

The function should accept the price of a kettle and the price of one of the
mugs, then return the value Suzie owes.

Test your function with different prices to see if it works.
*/

var kettlePrice = [25];
var mugPrice = 5;
var houseMates = 3

function finalBill(bill) {
    var totalBill = 0;
    for (i = 0; i < bill.length; i++) {
            totalBill = totalBill + bill[i] ;
        }
        return (totalBill + mugPrice) / houseMates ;
    }


    console.log(finalBill(kettlePrice));