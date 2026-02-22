import { Link } from "react-router-dom";

const TShirts = () => {
  const products = [
    {
      id: 1,
      name: "Men's Black T-Shirt",
      price: 799,
      image: "https://image.hm.com/assets/hm/dc/cc/dccc4c90e3b9010a6ee53a6354a4962e15b53b88.jpg?imwidth=2160",
    },
    {
      id: 2,
      name: "Men's White T-Shirt",
      price: 699,
      image: "https://image.hm.com/assets/hm/3a/34/3a34c07b3dfd3500dfd262be127cc5808b0d1f1b.jpg?imwidth=2160",
    },
    {
      id: 3,
      name: "Men's Olive Green T-Shirt",
      price: 899,
      image: "https://image.hm.com/assets/hm/95/42/9542f4b30032cb5f4a7b63bcd3a5f1fc9c7e53cc.jpg?imwidth=2160",
    },
    {
      id: 4,
      name: "Men's Navy Blue T-Shirt",
      price: 849,
      image: "https://image.hm.com/assets/hm/a5/1d/a51d3e1cbd076a3943cb6dac1c13bff02cda828a.jpg?imwidth=2160",
    },
    {
      id: 5,
      name: "Men's Beige T-Shirt",
      price: 999,
      image: "https://image.hm.com/assets/hm/a2/7b/a27bf12c10af2cb4a0f560bd4114b9520426b3dd.jpg?imwidth=2160",
    },
    {
      id: 6,
      name: "Men's Maroon T-Shirt",
      price: 899,
      image: "https://image.hm.com/assets/hm/7c/7e/7c7e77e03d783cd55620d867fdee6dd5340b8dd1.jpg?imwidth=2160",
    },
    {
      id: 7,
      name: "Men's Grey T-Shirt",
      price: 799,
      image: "https://image.hm.com/assets/hm/9e/c7/9ec7545780c0d31e848058bd73500d65616fc052.jpg?imwidth=2160",
    },
    {
      id: 8,
      name: "Men's Oversized Blue T-Shirt",
      price: 1099,
      image: "https://image.hm.com/assets/hm/eb/64/eb6438fb82385071bcab27505ae9d6374a5b1b7b.jpg?imwidth=2160",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-7xl ml-3 font-serif mb-10">
        T-Shirts Collection
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

export default TShirts;
