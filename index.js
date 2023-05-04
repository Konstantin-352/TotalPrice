var totalPrice = function (_a) {
    var price = _a.price, discount = _a.discount, isInstallment = _a.isInstallment, month = _a.month;
    if (price <= 0 || discount <= 0 || month <= 0) {
        throw new Error('Wrong data!');
    }
    var discountAmount = price * discount / 100;
    var discountedPrice = price - discountAmount;
    if (isInstallment) {
        return discountedPrice / month;
    }
    return discountedPrice;
};
try {
    console.log(totalPrice({
        price: 100000,
        discount: 25,
        isInstallment: true,
        month: 12
    }));
}
catch (e) {
    if (e instanceof Error) {
        console.error(e.message);
    }
    else {
        console.error(String(e));
    }
}
