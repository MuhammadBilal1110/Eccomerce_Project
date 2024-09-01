// import React from "react";
// import Layout from "./../components/Layout/Layout";

// const HomePage = () => {
//   return (
//     <Layout>
//       <h1>HomePage</h1>
//     </Layout>
//   );
// };

// export default HomePage;
// import React from "react";
// import Layout from "./../components/Layout/Layout";
// import { Link } from "react-router-dom";
// import "./HomePage.css";
// const HomePage = () => {
//   const products = [
//     {
//       id: 1,
//       name: "Product 1",
//       price: "$100",
//       image: "/images/led.jpg",
//       description: "High-quality product",
      
//     },
//     {
//       id: 2,
//       name: "Product 2",
//       price: "$150",
//       image: "/images/clothes.jpg",
//       description: "Premium features included",
//     },
//     {
//       id: 3,
//       name: "Product 3",
//       price: "$200",
//       image: "/images/home appliances.webp",
//       description: "Best value for your money",
//     },
//   ];

//   const categories = [
//     { name: "Electronics", image: "/images/electronics-item2.webp" },
//     { name: "Clothing", image: "/images/cloths.png" },
//     { name: "Home Appliances", image: "/images/home_items.webp" },
//   ];

//   return (
//     <Layout>
//       <div className="homepage">
//         {/* Hero Section */}
//         <div className="hero-section text-center">
//           <h1>Welcome to Our E-Commerce Store</h1>
//           <p>Shop the best products at unbeatable prices</p>
//           <Link to="/shop" className="btn btn-primary mt-3">
//             Start Shopping
//           </Link>
//         </div>

//         {/* Categories Section */}
//         <div className="categories-section mt-5">
//           <h2 className="text-center">Shop by Category</h2>
//           <div className="row mt-4">
//             {categories.map((category, index) => (
//               <div className="col-md-4" key={index}>
//                 <Link to={`/category/${category.name.toLowerCase()}`}>
//                   <div className="category-card text-center">
//                     <img
//                       src={category.image}
//                       alt={category.name}
//                       style={{ width: "100%", borderRadius: "8px" }}
//                     />
//                     <h4 className="mt-2">{category.name}</h4>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Featured Products Section */}
//         <div className="featured-products-section mt-5">
//           <h2 className="text-center">Featured Products</h2>
//           <div className="row mt-4">
//             {products.map((product) => (
//               <div className="col-md-4" key={product.id}>
//                 <div className="product-card">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     style={{ width: "100%", borderRadius: "8px" }}
//                   />
//                   <div className="product-info mt-3">
//                     <h4>{product.name}</h4>
//                     <p>{product.description}</p>
//                     <p>{product.price}</p>
//                     <Link to={`/product/${product.id}`} className="btn btn-secondary">
//                       View Details
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Call to Action Section */}
//         <div className="cta-section text-center mt-5">
//           <h2>Join Our Newsletter</h2>
//           <p>Subscribe to receive updates on new products and exclusive offers.</p>
//           <form className="d-inline-block mt-3">
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Enter your email"
//               style={{ width: "300px", display: "inline-block" }}
//             />
//             <button type="submit" className="btn btn-primary ml-2">
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default HomePage;





import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Import the CSS file

const HomePage = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$100",
      image: "/images/led.jpg",
      description: "High-quality product",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$150",
      image: "/images/clothes.jpg",
      description: "Premium features included",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$200",
      image: "/images/home appliances.webp",
      description: "Best value for your money",
    },
  ];

  const categories = [
    { name: "Electronics", image: "/images/electronics-item2.webp" },
    { name: "Clothing", image: "/images/cloths.png" },
    { name: "Home Appliances", image: "/images/home_items.webp" },
  ];

  return (
    <Layout>
      <div className="homepage">
        {/* Hero Section */}
        <div className="hero-section text-center">
          <h1>Welcome to Our E-Commerce Store</h1>
          <p>Shop the best products at unbeatable prices</p>
          <Link to="/shop" className="btn btn-primary mt-3">
            Start Shopping
          </Link>
        </div>

        {/* Categories Section */}
        <div className="categories-section mt-5">
          <h2 className="text-center">Shop by Category</h2>
          <div className="row mt-4">
            {categories.map((category, index) => (
              <div className="col-md-4" key={index}>
                <Link to={`/category/${category.name.toLowerCase()}`}>
                  <div className="category-card text-center">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="category-image"
                    />
                    <h4 className="mt-2">{category.name}</h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="featured-products-section mt-5">
          <h2 className="text-center">Featured Products</h2>
          <div className="row mt-4">
            {products.map((product) => (
              <div className="col-md-4" key={product.id}>
                <div className="product-card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="product-info mt-3">
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <Link to={`/product/${product.id}`} className="btn btn-secondary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="cta-section text-center mt-5">
          <h2>Join Our Newsletter</h2>
          <p>Subscribe to receive updates on new products and exclusive offers.</p>
          <form className="d-inline-block mt-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              style={{ width: "300px", display: "inline-block" }}
            />
            <button type="submit" className="btn btn-primary ml-2">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
