

import { Link } from "react-router-dom";

const Hoodies = () => {
  const products = [
  {
    id: 1,
    name: "Men's Black Hoodie",
    price: 1799,
    image:"https://image.hm.com/assets/hm/15/4f/154fc8cea8d1781a1700bcbd90ef1dbe506e4831.jpg?imwidth=2160"
  },
  {
    id: 2,
    name: "Men's Grey Hoodie",
    price: 1599,
    image:
"https://image.hm.com/assets/hm/b8/5b/b85be7b1fb12ea62271f18c4ce7271138d47b696.jpg?imwidth=2160"
  },
  {
    id: 3,
    name: "Men's Olive Green Hoodie",
    price: 1899,
    image:
"https://image.hm.com/assets/hm/13/34/1334bb05a7c4714ad7ac040b9dd2249c11360197.jpg?imwidth=2160"
  },
  {
    id: 4,
    name: "Men's Navy Blue Hoodie",
    price: 1699,
    image:
"https://image.hm.com/assets/hm/bc/50/bc50be829fdbc9494d21e6cce5d8dcad84270b51.jpg?imwidth=2160"
  },
  {
    id: 5,
    name: "Men's Beige Hoodie",
    price: 1999,
    image:
"https://image.hm.com/assets/hm/db/ff/dbffa3571b9d73c6762519abda9ce3a75a30be0c.jpg?imwidth=2160"
  },
  {
    id: 6,
    name: "Men's Maroon Hoodie",
    price: 1899,
    image:
"https://image.hm.com/assets/hm/55/9a/559a9289b50884206020332ff999227553cb4e8c.jpg?imwidth=2160"
  },
  {
    id: 7,
    name: "Men's White Hoodie",
    price: 2099,
    image:
"https://image.hm.com/assets/hm/d5/22/d5222b0c246142ebdc376b35587100e8f7ac23d4.jpg?imwidth=2160"
  },
  {
    id: 8,
    name: "Men's Oversized Blue Hoodie",
    price: 2199,
    image:
"https://image.hm.com/assets/hm/c1/ed/c1ed3b6b8b44ab49a6b5da7d8b04c6322028ce46.jpg?imwidth=2160"
  },
];


  return (
    <div className="p-6">
      <h1 className="text-7xl ml-3 font-serif mb-10">
        Exclusive Collection
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

export default Hoodies;
