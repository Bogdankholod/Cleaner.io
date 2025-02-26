function orderService(type, price) {
    let squareMeters = prompt(`Введіть кількість квадратних метрів для ${type}:`);
    if (squareMeters && !isNaN(squareMeters) && squareMeters > 0) {
        let totalPrice = squareMeters * price;
        alert(`Ви замовили ${type} на ${squareMeters} м². Вартість: ${totalPrice} грн.`);
    } else {
        alert("Будь ласка, введіть коректну кількість квадратних метрів.");
    }
}
