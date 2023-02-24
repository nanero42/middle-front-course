"use strict";
const totalPrice = ({ price, discount = 0, isInstallment = false, months = 0, }) => {
    if (isInstallment) {
        if (months < 1 || months > 12) {
            throw new Error('Error! Months\'s value must be from 1 till 12.');
        }
        if (discount < 1 || discount > 100) {
            throw new Error('Error! Discount\'s value must be from 1 till 100.');
        }
        if (price < 1) {
            throw new Error('Error! Price cannot be below zero.');
        }
        return (price * ((100 - discount) / 100)) / months;
    }
    return price;
};
console.log(totalPrice({ price: 100000, isInstallment: true, discount: 25, months: 12 }));
