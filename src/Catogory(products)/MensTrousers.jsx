import { Link } from "react-router-dom";


const MensTrousers=()=>{
  
  const products = [
    { id: 1, name: "Men's blue jeans ", price: 1499, image: "https://image.hm.com/assets/hm/f3/6e/f36e2e8cc503485077db27ea358f3d9486d314da.jpg?imwidth=2160"  },
    { id: 2, name: "Men's plain black trousers", price: 999, image: "https://image.hm.com/assets/hm/58/48/5848f9ef7c4418ebb478fbca08d988f2988b1e93.jpg?imwidth=2160" },
    { id: 4, name: "Men's cottons trousers ", price: 1199, image: "https://image.hm.com/assets/hm/94/06/9406a31a09176e6892822a04dec5fe72883d8bc1.jpg?imwidth=2160" },
    { id: 3, name: " Men's loose strightfit jeans ", price: 1999, image: "https://image.hm.com/assets/hm/34/9c/349c3087bcaa1fd098ec6d5d34479b166e334b2a.jpg?imwidth=2160" },
    { id: 5, name: "Men's shaded jeans  ", price: 1499, image: "https://image.hm.com/assets/hm/39/f5/39f50424ff1a64c55510f22f1426d3a3b684c93f.jpg?imwidth=2160" },
    { id: 6, name: "Men's  brown trousers  ", price: 999, image: "https://image.hm.com/assets/hm/f9/9f/f99f61402cdb2ea4d231c8169be2cc4c4eca0e01.jpg?imwidth=2160" },
    { id: 7, name: "Men's  beige teousers ", price: 1999, image: "https://image.hm.com/assets/hm/52/1b/521b45ef6d503e0aacefc42e3a6e8c81bac3e3e3.jpg?imwidth=2160" },
    { id: 8, name: "Men's  cream trousers ", price: 1499, image: "https://image.hm.com/assets/hm/8e/f6/8ef6b82bf3a533581a14654b1622146557a86af4.jpg?imwidth=2160" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-7xl ml-3 mask-radial-from-neutral-800 font-serif mb-10">Exclusive Collection</h1>


      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {products.map((item) => (

          <Link
            key={item.id}
            to="/product"
            state={{ product: item }}
            className="shadow-lg p-3 rounded-lg hover:-translate-y-1 transition block"
          >
          <div key={item.id} className="shadow-lg p-3 rounded-lg hover:-translate-y-1 transition">
            
            <img
              src={item.image}
              alt={item.name}
              className="h-64 w-full object-cover rounded-md"
            />

            <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
            <p className="text-gray-500">₹{item.price}</p>
          </div>
          </Link>
        ))}

      </div>
    </div>

    )
            
            
            
}
export default MensTrousers
