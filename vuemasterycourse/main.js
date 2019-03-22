let app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        description: "A pair of warm, fuzzy socks",
        image: "./vmSocks-green-onWhite.jpg",
        inventory: 0,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "./assets/vmSocks-green-onWhite.jpg"
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./assets/vmSocks-blue-onWhite.jpg"
            }
        ],
        sizes: [8, 9, 10, 11],
        cart: 0,
    },
    methods: {
        addToCart: function()  {
            this.cart += 1
        },
        updateProduct: function (variantImage) {
            this.image = variantImage
        },
        removeFromCart()    {
            this.cart -= 1;
        }
    }
})