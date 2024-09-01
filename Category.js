// import React from "react";
// import { Link } from "react-router-dom";
// import './Category.css'; // Import your CSS file for styling

// const Category = () => {
//   // Sample categories data
//   const categories = [
//     { id: 1, name: "Electronics", image: "/images/home_items.jpg" },
//     { id: 2, name: "Clothing", image: "/images/clothing_cat.jpg" },
//     { id: 3, name: "Home Appliances", image: "images/home_cat.jpg" }
    
//   ];

//   return (
//     <div className="category-page">
//       <h1 className="text-center">Shop by Category</h1>
//       <div className="container">
//         <div className="row">
//           {categories.map((category) => (
//             <div className="col-md-4" key={category.id}>
//               <Link to={`/category/${category.name.toLowerCase()}`} className="category-card">
//                 <img
//                   src={category.image}
//                   alt={category.name}
//                   className="category-image"
//                 />
//                 <div className="category-info">
//                   <h4>{category.name}</h4>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Category;
import React from "react";
import { Link } from "react-router-dom";
import './Category.css'; // Import your CSS file for styling

const Category = () => {
  // Updated categories data with Grocery
  const categories = [
    { id: 1, name: "Electronics", image: "/images/home_items.jpg" },
    { id: 2, name: "Clothing", image: "/images/clothing_cat.jpg" },
    { id: 3, name: "Home Appliances", image: "/images/home_cat.jpg" },
    { id: 4, name: "Cars", image: "/images/cars_cat.jpg" }, 
    { id: 5, name: "Bikes", image: "/images/bikes_cat.jpg" },
    { id: 6, name: "Grocery", image: "/images/grocery_cat.jpg" } // New category
  ];

  return (
    <div className="category-page">
      <h1 className="text-center">Shop by Category</h1>
      <div className="container">
        <div className="row">
          {categories.map((category) => (
            <div className="col-md-4" key={category.id}>
              <Link to={`/category/${category.name.toLowerCase()}`} className="category-card">
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                />
                <div className="category-info">
                  <h4>{category.name}</h4>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
