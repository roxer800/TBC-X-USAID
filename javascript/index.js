import {cart} from '../javascript/cart.js';

let productHTML = ''

cart.forEach((cartProduct) => {
    productHTML +=`
    <div class="col ">
        <div class="cart">
            <div>
                <img class="cart--image" src="${cartProduct.image}" alt="">
            </div>
            <h3>${cartProduct.name}</h3>
            <h4>${cartProduct.status}</h4>
            <div class="details">
            <img class="cart--arrow--right" src="../images/cart-images/arrow-right-solid.svg" >
            <div class="course--details"><i>კურსის დეტალები</i></div>
            </div>
        </div>
    </div>
    `
})



document.querySelector('.js--products--section').innerHTML = productHTML


