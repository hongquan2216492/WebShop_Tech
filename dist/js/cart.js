$(function () {
    const cart = JSON.parse(localStorage.getItem("cart"));
    // console.log(cart);
    cart.map(val => {
        $(`
        <div data-id=${val.id} class="item">
                    <button id="delete">X</button>
                    <img src=${val.img}
                        alt="">
                    <div class="name">${val.name}</div>
                    <div class="price">
                        <span class="price-discount">
                           $${Math.round(val.price - val.price * val.discount / 100)}.00</span>
                    </div>
                    <form class="flex a-center" action="#">
                        <div class="btn flex  a-center">
                            <div class="dec-button">-</div>
                            <input type="text" class="quantity_" id="quantity" value=${val.quantity}>
                            <div class="inc-button">+</div>
                        </div>
                    </form>
                    <div class="subtotal">$${Math.round(val.price - val.price * val.discount / 100) *
            val.quantity}.00
                    </div>
                    <button class="update" >Update Cart</button>
                </div>
                <div class="b-bottom"></div>
                
        `).appendTo(".cols")
    })




})