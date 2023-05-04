interface ITotalPriceParams {
    price: number
    discount: number
    isInstallment: boolean
    month: number
}
type TTotalPrice = (params: ITotalPriceParams) => number

const totalPrice: TTotalPrice = ({price, discount, isInstallment, month}) => {
    if(price <= 0 || discount <= 0 || month <= 0) {
        throw new Error('Wrong data!');
    }

    const discountAmount = price * discount / 100;
    const discountedPrice = price - discountAmount;

    if(isInstallment) {
        return discountedPrice / month;
    }

    return discountedPrice;
}

try {
    console.log(totalPrice({
        price: 100000,
        discount: 25,
        isInstallment: true,
        month: 12
    }))
} catch (e) {
    if(e instanceof Error) {
        console.error(e.message)
    } else {
        console.error(String(e))
    }
}
