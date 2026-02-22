import { FiX, FiGift } from "react-icons/fi";

const Discount = ({ open, onClose = () => {} }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative w-90 rounded-2xl bg-white p-6 shadow-2xl animate-scaleIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <FiX size={20} />
        </button>

        <div className="flex justify-center mb-4 text-red-500">
          <FiGift size={42} />
        </div>

        <h2 className="text-3xl font-bold text-center mb-2">
          Flat <span className="text-red-500">30% OFF</span>
        </h2>

        <p className="text-center text-gray-600 mb-5">
          On your first purchase at <b>SoulStore</b>
        </p>

        <div className="border-2 border-dashed border-red-400 rounded-lg p-3 text-center mb-5">
          <p className="text-sm text-gray-500">Use Code</p>
          <p className="text-xl font-bold tracking-widest text-red-500">SOUL30</p>
        </div>

        <button
          onClick={onClose}
          className="w-full rounded-xl bg-black py-3 text-white font-semibold hover:bg-gray-900 transition"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Discount;
