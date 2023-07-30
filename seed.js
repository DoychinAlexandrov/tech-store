const Stripe = require('stripe')
const products = require('./products')

const stripe = Stripe("sk_test_51NXIttIOl0zufqZP4JKyzKTdkpje7aTIIBg72GXSHht4FwY5gAt0hHR1xfy96neDjWskyT59RxQEImfr0PjLLt35009Gocm7gy");

//using IFI -> automatically invoked function expression
(async () => {
    for (const product of products) {
        const stripeProduct = await stripe.products.create({
            name: product.name,
            default_price_data: {
                currency: product.currency,
                unit_amount_decimal: product.price,
            },
            images: [product.image],
        });
        console.log(stripeProduct.name, ":", stripeProduct.id)
    }
})();