import React, { useState } from 'react';

const Product = () => {
 const [changes, setChanges] = useState({})
 const [sizeindex, setSizeindex] = useState({})
  const products = [
    {
      id: 1,
      name: "Women's Hooded Packable Jacket",
      price: 29.99,
      availability: "In Stock",
      images:[
        {
          variant: "gray",
          url: "https://res.cloudinary.com/dnr5u3jpb/image/upload/v1703340497/OIP_wf1gvw.jpg",
        },
        {
          variant: "red",
          url: "https://res.cloudinary.com/dnr5u3jpb/image/upload/v1703340305/OIP_ctt65w.jpg",
        },
      ],
      colors: ["gray", "red"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
    },
    {
      id: 2,
      name: "AG Jeans EmRata x AG Jerrie Jacket",
      price: 39.99,
      availability: "In Stock",
      images:[
        {
          variant: "gray",
          url: "https://res.cloudinary.com/dnr5u3jpb/image/upload/v1703341580/OIP_fyoysl.jpg",
        },
        {
          variant: "red",
          url: "https://res.cloudinary.com/dnr5u3jpb/image/upload/v1703341678/3c9bd8efd98e44ebd91c9e528f97737b_rwj8dg.jpg",
        },
      ],
      colors: ["gray", "red"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
    },
    {
      id: 3,
      name: "Women's Hooded Packable Jacket",
      price: 29.99,
      availability: "In Stock",
      images:[
        {
          variant: "gray",
          url: "https://res.cloudinary.com/dnr5u3jpb/image/upload/v1703340497/OIP_wf1gvw.jpg",
        },
        {
          variant: "red",
          url: "https://res.cloudinary.com/dnr5u3jpb/image/upload/v1703340305/OIP_ctt65w.jpg",
        },
      ],
      colors: ["gray", "red"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
    },
    {
      id: 4,
      name: "AG Jeans EmRata x AG Jerrie Jacket",
      price: 39.99,
      availability: "In Stock",
      images:[
        {
          variant: "gray",
          url: "https://res.cloudinary.com/dnr5u3jpb/image/upload/v1703341580/OIP_fyoysl.jpg",
        },
        {
          variant: "red",
          url: "https://res.cloudinary.com/dnr5u3jpb/image/upload/v1703341678/3c9bd8efd98e44ebd91c9e528f97737b_rwj8dg.jpg",
        },
      ],
      colors: ["gray", "red"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
    }
  ]
  const handleProductChanges = (data,color) => {
    setChanges({
     id: data.id,
     color: color,
    })
  }
  const handleSizeChanges = (data,i) => {
    setSizeindex({
     id: data.id,
     index: i,
    })
  }
    return (
     <div className=' grid grid-cols-12 gap-x-6'>
       {
          products.map((data,i)=> <div className="bg-white py-4 mt-[70px] shadow-lg rounded-[20px] lg:col-span-4 md:col-span-6 col-span-12" key={i}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col -mx-4">
              <div className="md:flex-1 px-4">
                <div className=" rounded-lg flex justify-center mb-4 min-h-[100px]">
                  <img
                    className="h-[320px] object-cover "
                    src={
                      changes.id === data.id && changes.color === 'red' ? data.images[1].url : data.images[0].url
                    }
                    alt="Product Image"
                  />
                </div>
                
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="text-[17px] font-bold text-gray-800  mb-2">
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
                      data.colors.map((color,i)=> color === 'gray' ? <button className={
                        ` 
                        w-6 h-6 rounded-full bg-gray-500  mr-2 ${changes.id === data.id && changes.color === 'gray' ? 'border-2 border-[#335dff]' : ''}
                        `

                      } key={i} 
                      onClick={()=> handleProductChanges(data,color)}
                      /> : <button className={`
                      w-6 h-6 rounded-full bg-red-500  mr-2 ${changes.id === data.id && changes.color === 'red' ? 'border-2 border-[#335dff]' : ''}
                        
                      `} key={i} 
                      onClick={()=> handleProductChanges(data,color)}
                      />)
                    }
                  </div>
                </div>
                <div className="mb-4">
                  <span className="font-bold text-gray-700">
                    Select Size:
                  </span>
                  <div className="flex items-center mt-2">
                    {
                      data.sizes.map((size,i)=> <button className={`
                      bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 
                        ${sizeindex.id === data.id && sizeindex.index === i ? 'border-2 border-[#335dff]' : ' border-2 border-transparent'}

                      `} key={i}
                      onClick={()=> handleSizeChanges(data,i)}
                      >
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