'use strict';

const price = Number(prompt('Задача 1\nЦена товара:'));
const quantity = Number(prompt('Количество товара:'));

const orderCost = price * quantity;

alert(`Стоимость заказа: ${orderCost}`);


const width = Number(prompt('Задача 2\nШирина прямоугольника:'));
const height = Number(prompt('Высота прямоугольника:'));

const area = width * height;

alert(`Площадь: ${area}`);


const originalPrice = Number(prompt('Задача 3\nЦена товара:'));
const discountPercent = Number(prompt('Скидка в процентах:'));

const discount = originalPrice * discountPercent / 100;
const finalPrice = originalPrice - discount;

alert(`Цена после скидки: ${finalPrice}`);


const totalMinutes = Number(prompt('Задача 4\nКоличество минут:'));

const hours = Math.trunc(totalMinutes / 60);
const minutes = totalMinutes % 60;

alert(`${hours} ч ${minutes} мин`);


const dividend = Number(prompt('Задача 5\nДелимое:'));
const divisor = Number(prompt('Делитель:'));

const wholePart = Math.trunc(dividend / divisor);
const remainder = dividend % divisor;

alert(`Целая часть: ${wholePart}\nОстаток: ${remainder}`);