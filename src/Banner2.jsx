const Banner2 = () => {
  return (
    <div className="grid grid-cols-2 gap-2 m-10">


      <div className="relative  h-190 rounded-xl overflow-hidden">
  <img
    src="https://i.pinimg.com/1200x/60/c8/e3/60c8e30839bf12df63c256699d4ac9b1.jpg"
    alt=""
    className="w-full h-full object-cover"
  />


  <button className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
    Shop Now
  </button>
</div>



      <div className="grid grid-rows-2 gap-2 ">
        <img
          src="https://i.pinimg.com/1200x/b1/2a/4b/b12a4bd6a36f48c14157e595992d1a46.jpg"
          alt=""
          
          className="h-90 w-full object-cover rounded-lg"
        />
        <img
          src="https://i.pinimg.com/1200x/0d/be/18/0dbe18421a5230e8129a8f605deb61a4.jpg"
          alt=""
          className="h-90 w-full object-cover rounded-lg"
        />
      </div>
      

    </div>
  );
};

export default Banner2;
