const formattedPrice = (price: number) => {
    const nwePrice = new Intl.NumberFormat("en-IE", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(price)
    
    return nwePrice
}




export {formattedPrice}