//Prod
const ApiEndpoint = "https://netflix-backend-seven.vercel.app/api/v1/";

// Dev
// const ApiEndpoint = "http://localhost:8000/api/v1/";

export const AppSettings = {
  Urls: {
    Auth: {
      loginUrl: ApiEndpoint + "users/login",
      forgotPassword: ApiEndpoint + "forgotpassword",
      RegisterUser: ApiEndpoint + "users/register",
    },
    Product: {
      addProduct: ApiEndpoint + "products/addProduct",
      getProduct: ApiEndpoint + "product",
      updateProduct: ApiEndpoint + "product/",
      deleteProduct: ApiEndpoint + "product/",
    },
  },
};
