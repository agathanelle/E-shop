const fakeStoreAPIUrl = "https://fakestoreapi.com";

export const fetchProducts = {
    method: "GET",
    url: `${fakeStoreAPIUrl}/products`
  };

  export function fetchProduct(id) {
      return ({
        method: "GET",
        url: `${fakeStoreAPIUrl}/products/${id}`,
      });
  }

  export const addToCart = (productId, quantity) => ({
    method: 'POST', url:`${fakeStoreAPIUrl}/carts`, data:{
      userId: 5,
      products: [{productId, quantity}]
    }
  })

  export const getCart = {
    url: `https://fakestoreapi.com/carts/5`,
    method: "GET"
  }