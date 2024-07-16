const productList = async () =>{
    return fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

const createProducts = async(name, price, img) => {
    return fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            price,
            img,
        })
    })
        .then((res) => res.json())
        .catch((err) => console.log(err));
};
const deleteProduct = async (id) => {
    return fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
        headers:{
            "Content-Type": "application/json",
        }
})
    .then((res) => res.json())
    .catch((err) => console.log(err));

};

export const servicesProduct ={
    productList, createProducts, deleteProduct
}