
export function getData(){
    const products = [
        {
          id: "1",
          name: "Awesome Soft Hat",
          name_category: "Thời trang nam",
          code: "19381-4141",
          image: "https://dongphuchaianh.vn/wp-content/uploads/2022/04/ao-polo-nam-da-nang.jpg",
          price: "788.00",
          old_price: "929.00"
        },
        {
          id: "2",
          name: "Ergonomic Concrete Computer",
          name_category: "Thời trang nam",
          code: "52642-1797",
          image: "https://bizweb.dktcdn.net/100/399/392/files/shop-quan-ao-nam-da-nang-765205ed-f942-4159-893e-18db0a32967c.jpg?v=1613568345929",
          price: "698.00",
          old_price: null
        },
        {
          id: "3",
          name: "Ergonomic Fresh Salad",
          name_category: "Thời trang nam",
          code: "39873-7574",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAo9NJAMBZSj5w_DZ0aksFXELeDsH-R9nLLg&s",
          price: "685.00",
          old_price: "748.00"
        },
        {
          id: "4",
          name: "Intelligent Granite Pants",
          name_category: "Thời trang nam",
          code: "81541",
          image: "https://sakurafashion.vn/upload/images_14/h2_1.jpg",
          price: "13.00",
          old_price: "729.00"
        },
        {
          id: "5",
          name: "Handmade Rubber Gloves",
          name_category: "Thời trang nam",
          code: "11235-5231",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAIGBUJ0O-P-vO2Z83l_4tnxAL8ZQFI0mdVg&s",
          price: "299.00",
          old_price: "399.00"
        },
        {
          id: "6",
          name: "Gorgeous Cotton Shirt",
          name_category: "Thời trang nam",
          code: "33425-8732",
          image: "https://dongphuchaianh.vn/wp-content/uploads/2022/04/ao-polo-nam-da-nang-vai-bong.jpg",
          price: "459.00",
          old_price: "599.00"
        },
        {
          id: "7",
          name: "Fantastic Wooden Shoes",
          name_category: "Thời trang nam",
          code: "78541-4451",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1v3C6Kau4Gobf4wLG8J7ojT5z-TVrHVyqEQ&s",
          price: "99.00",
          old_price: "149.00"
        },
        {
          id: "8",
          name: "Refined Plastic Watch",
          name_category: "Thời trang nam",
          code: "97325-1285",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYGm94cv_7XMRTNB1kDjhqB_uElvY7Ey_B7Q&s",
          price: "1299.00",
          old_price: "1599.00"
        },
        {
          id: "9",
          name: "Incredible Silk Scarf",
          name_category: "Thời trang nam",
          code: "12222-8992",
          image: "https://down-vn.img.susercontent.com/file/f48644531167b50f66ba179a303df8b9",
          price: "199.00",
          old_price: "249.00"
        },
        {
          id: "10",
          name: "Practical Linen Blazer",
          name_category: "Thời trang nam",
          code: "55312-3331",
          image: "https://tmluxury.vn/wp-content/uploads/guu-thoi-trang-nam-don-gian-tong-hop.jpg",
          price: "789.00",
          old_price: "899.00"
        }
      ];
      localStorage.setItem('products', products)
    return products
}