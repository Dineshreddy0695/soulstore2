import { Link } from "react-router-dom";

const Perfumes = () => {
  const products = [
    {
      id: 1,
      name: "Men's Woody Perfume",
      price: 2499,
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f",
    },
    {
      id: 2,
      name: "Men's Fresh Citrus Perfume",
      price: 2299,
      image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569",
    },
    {
      id: 3,
      name: "Men's Oud Luxury Perfume",
      price: 3499,
      image: "https://images.unsplash.com/photo-1610461888750-10bfc601b874",
    },
    {
      id: 4,
      name: "Men's Classic Musk Perfume",
      price: 1999,
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539",
    },
    {
      id: 5,
      name: "Men's Night Intense Perfume",
      price: 2999,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601",
    },
    {
      id: 6,
      name: "Men's Amber Perfume",
      price: 2699,
      image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    },
    {
      id: 7,
      name: "Men's Spicy Leather Perfume",
      price: 3199,
      image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569",
    },
    {
      id: 8,
      name: "Men's Aqua Perfume",
      price: 2199,
      image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-7xl ml-3 font-serif mb-10">
        Perfumes Collection
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item) => (
          <Link
            key={item.id}
            to="/product"
            state={{ product: item }}
            className="shadow-lg p-3 rounded-lg hover:-translate-y-1 transition block"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-64 w-full object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
            <p className="text-gray-500">₹{item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Perfumes;
