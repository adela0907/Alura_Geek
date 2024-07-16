import { servicesProducts } from "../servicios/products-service.js";

const productoContainer = document.querySelector("[data-producto]");

function createCard(name, price, img, id) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
             <div class="imagen_container">
                        <img src="${img}" alt="${name}">
                    </div>
                    <div class="card_info">
                        <p>${name}</p>
                        <div class="card_value">
                            <p>${price}</p>
                            <button class="delete_button" data-id="${id}">
                                <img src="" alt="eliminar">
                            </button>
                        </div>
             </div>>
     `;
    const deleteButton = card.querySelector(".delete_button");
    deleteButton.addEventListener("click", () => {
        servicesProducts.deleteProducto(id).then(() => {
            card.remove();
        }).catch((err) => console.log(err));
    });

    productoContainer.appendChild(card);
    return card;
}

const render = async () => {
    try {
        const listProducts = await servicesProducts.productList();
        listProducts.forEach((product) => {
        productoContainer.appendChild(
            createCard(
                product.name,
                 product.price,
                  product.img,
                  product.id
                )
            );
        });

    } catch (error) {
        console.error();
    }

};

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const img = document.querySelector("[data-img]").value;

    
    servicesProducts.createProducts(name, price, img).then((res)=> console.log(res)).catch((err)=> console.log)
})
render();
