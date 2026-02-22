const brands = [
  {
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  },
  {
    name: "Puma",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmEw8TrscvmCGKcZO9Z9g0sfzQv2gHyWvz2g&s",
  },
  {
    name: "Levi's",
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Levis-logo.jpg",
  },
  {
    name: "H&M",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
    
  },
  {
    name: "Zara",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
    
  },
  {
    name: "Uniqlo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/UNIQLO_logo.svg",
    
  },
  {
    name: "Calvin kelvin",
    logo: "https://1000logos.net/wp-content/uploads/2021/11/Calvin-Klein-logo.png",
    
  },
  {
    name: "Tommy Hilfiger",
    logo: "https://static.vecteezy.com/system/resources/thumbnails/071/985/796/small/tommy-hilfiger-logo-set-top-clothing-brand-editorial-logotype-free-vector.jpg",
    
  },
  
  {
    name: "Diesel",
    logo: "https://cdn.worldvectorlogo.com/logos/diesel-1.svg",
    
  },
  {
    name: "Jack&Jones",
    logo: "https://images.seeklogo.com/logo-png/38/1/jack-and-jones-logo-png_seeklogo-389891.png",
    
  },
  {
    name: "US PoloAssign",
    logo: "https://1000logos.net/wp-content/uploads/2021/04/U.S.-Polo-Assn-logo.png",
    
  }
  
];

import { Link } from "react-router-dom";

const ShopByBrands = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Shop by Brands</h2>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
        {brands.map((brand) => (
          <Link
            key={brand.name}
            to={`/brand/${brand.name}`
          }
            className="flex items-center justify-center p-4 border rounded-xl hover:shadow-md transition"
            target="_blank"
  rel="noopener noreferrer"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-12 object-contain"
              loading="lazy"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopByBrands;
