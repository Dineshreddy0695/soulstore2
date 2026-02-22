import { Link } from "react-router-dom";

const Shirts = () => {
  const products = [
    { id: 1, name: "Men's maroon shirt", price: 999, image: "https://image.hm.com/assets/hm/f4/01/f4017aa4372b11d441067afe6e95cb699a1d3608.jpg?imwidth=2160" },
    { id: 2, name: "Men's black shirt", price: 999, image: "https://image.hm.com/assets/hm/c6/8f/c68f7fc967aa3a5c9f039f8010722545b4af9803.jpg?imwidth=2160" },
    { id: 3, name: "Men's olive shirt", price: 799, image: "https://image.hm.com/assets/hm/a6/c7/a6c7075835b8aaceece26b99bc46b8e32f12fadb.jpg?imwidth=2160" },
    { id: 4, name: "Men's white shirt", price: 1199, image: "https://image.hm.com/assets/hm/e3/c4/e3c4332cbed8f116ab44bca3cd96b3750873d3a5.jpg?imwidth=2160" },
    { id: 5, name: "Men's light blue shirt", price: 1499, image: "https://image.hm.com/assets/hm/a3/b1/a3b197276f00551736f9b64b5f0a7f970f49b6d2.jpg?imwidth=2160" },
    { id: 6, name: "Men's green checks shirt", price: 1999, image: "https://image.hm.com/assets/hm/8e/d3/8ed39cd302c20ab260241403ff597e16623593a0.jpg?imwidth=2160" },
    { id: 7, name: "Men's white shirt", price: 1999, image: "https://image.hm.com/assets/hm/cd/43/cd4316b94b25e70ce437e06fa5051afdcd47895d.jpg?imwidth=2160" },
    { id: 8, name: "Men's blue overshirt", price: 1499, image: "https://image.hm.com/assets/hm/ca/1f/ca1fda51e09a782112d25e85441e8b6e74af62de.jpg?imwidth=2160" },
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

export default Shirts;
