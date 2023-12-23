import React from 'react';

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Mordern Jackets",
      price: 29.99,
      availability: "In Stock",
      images:[
        {
          variant: "black",
          url: "https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg",
        },
        {
          variant: "red",
          url: "https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg",
        },
      ],
      colors: ["gray", "red"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
    },
    {
      id: 2,
      name: "Mordern Jackets",
      price: 29.99,
      availability: "In Stock",
      images:[
        {
          variant: "black",
          url: "https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg",
        },
        {
          variant: "red",
          url: "https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg",
        },
      ],
      colors: ["gray", "red"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
    }
  ]
    return (
     <div className=' grid grid-cols-12 gap-x-6'>
       {
          products.map((data,i)=> <div className="bg-white py-4 mt-[70px] shadow-lg rounded-[20px] col-span-4" key={i}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col -mx-4">
              <div className="md:flex-1 px-4">
                <div className="max-h-[370px] w-[100%] rounded-lg bg-gray-300 mb-4">
                  <img
                    className="w-full h-full object-cover"
                    src={data.images[0].url}
                    alt="Product Image"
                  />
                </div>
                
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800  mb-2">
                  {data.name}
                </h2>
                <div className="flex mb-4">
                  <div className="mr-4">
                    <span className="font-bold text-gray-700 ">
                      Price:
                    </span>
                    <span className="text-gray-600 ">${data.price}</span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700 ">
                      Availability:
                    </span>
                    <span className="text-gray-600 ">{
                      data.availability
                    }</span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="font-bold text-gray-700 ">
                    Select Color:
                  </span>
                  <div className="flex items-center mt-2">
                    {
                      data.colors.map((color,i)=> color === 'gray' ? <button className="w-6 h-6 rounded-full bg-gray-800  mr-2" key={i} /> : <button className="w-6 h-6 rounded-full bg-red-500  mr-2" key={i} />)

                    }
                    
                  </div>
                </div>
                <div className="mb-4">
                  <span className="font-bold text-gray-700">
                    Select Size:
                  </span>
                  <div className="flex items-center mt-2">
                    {
                      data.sizes.map((size,i)=> <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400" key={i}>
                      {size}
                    </button>)
                    }
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)
       }
     </div>
    
    );
};

export default Product;