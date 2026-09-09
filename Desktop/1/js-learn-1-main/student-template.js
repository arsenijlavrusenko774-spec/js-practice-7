'use strict';

// Практическая работа №1

// 1. 
function calculateOrderCost(price, quantity) {
    return price * quantity;
}

// 2. 
function rectangleArea(width, height) {
    return width * height;
}

// 3. 
function calculateDiscount(price, discountPercent) {
    return price - (price * discountPercent / 100);
}

// 4. 
function minutesToHours(totalMinutes) {
    const hours = Math.trunc(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours} ч ${minutes} мин`;
}

// 5. 
function divisionResult(dividend, divisor) {
    const wholePart = Math.trunc(dividend / divisor);
    const remainder = dividend % divisor;

    return `${wholePart};${remainder}`;
}

module.exports = {
    calculateOrderCost,
    rectangleArea,
    calculateDiscount,
    minutesToHours,
    divisionResult,
};