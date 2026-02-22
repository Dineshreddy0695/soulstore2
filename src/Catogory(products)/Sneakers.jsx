import { Link } from "react-router-dom";

const Sneakers = () => {
  const products = [
    {
      id: 1,
      name: "Men's  Sneakers",
      price: 3999,
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    },
    {
      id: 2,
      name: "Men's casual Sneakers",
      price: 4299,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    },
    {
      id: 3,
      name: "Men's White Sneakers",
      price: 4999,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRf7MPwEX3hB3fvnkSUVQr4IUv0svSp3SLlHnjtYrjjV_2y5LP3o06hDW_f7-YXd0uHjeqWqDMgkK238cLvqY8mMespg5fT7uTbL58L-kJcn0PeWoTnb8tdiw&usqp=CAc",
    },
    {
      id: 4,
      name: "Men's Running Sneakers",
      price: 4599,
    
      image: "https://image.hm.com/assets/hm/54/ec/54ec47e5a25c24a90c2f8c6370fc9dda825e95cc.jpg?imwidth=657",
    },
    {
      id: 5,
      name: "Men's Grey Sneakers",
      price: 3899,
      image: "https://image.hm.com/assets/hm/20/14/20144fe7ce040f086d6449ef41385f15a1334403.jpg?imwidth=2160",
    },
    {
      id: 6,
      name: "Men's High-Top Sneakers",
      price: 5299,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      id: 7,
      name: "Men's Black Sneakers",
      price: 4499,
      image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
    },
    {
      id: 8,
      name: "Men's Sport Sneakers",
      price: 4799,
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQul5ZwiggneJXX8v_5HrrR189pGR5QzAFrk5bvE32r_kzLPl5RDRzXrjvDHlQT-3UrexIGcE6O40scR60iNMGuJhBUzP_zE5Hsjr168J98b45KpAXu7kkVJGUv95h4gcjcLFGvQAQ&usqp=CAc",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-7xl ml-3 font-serif mb-10">
        Sneakers Collection
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

export default Sneakers;
