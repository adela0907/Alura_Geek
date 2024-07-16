const productList = async () =>{
    return fetch("https://api-alurageek-kappa.vercel.app/product")
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

const createProducts = async(name, price, img) => {
    return fetch("https://api-alurageek-kappa.vercel.app/product", {
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
    return fetch(`https://api-alurageek-kappa.vercel.app/product${id}`, {
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
