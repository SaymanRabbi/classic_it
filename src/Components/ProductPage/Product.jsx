import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useProductStore } from '../../../store/productStore';

const Product = () => {
  const getProducts= useProductStore(state => state.getProducts)
 const [changes, setChanges] = useState({})
 const [sizeindex, setSizeindex] = useState({})
 const {success,product:products} = useProductStore(state => state.products)
 console.log(products)
 useEffect(()=> {
    getProducts()
 },[getProducts])
  const handleProductChanges = (data,color) => {
    setChanges({
     id: data._id,
     color: color,
    })
  }
  const handleSizeChanges = (data,i) => {
    setSizeindex({
     id: data._id,
     index: i,
    })
  }
    return (
     <>
      {
        !success ? <div className=' w-[100%] h-[300px] flex items-center justify-center text-[2xl] text-[#335dff]'><p>
           Loading...
          </p></div> : <div className=' grid grid-cols-12 gap-x-6'>
        {
           products?.map((data,i)=> <div className="bg-white py-4 mt-[70px] shadow-lg rounded-[20px] lg:col-span-4 md:col-span-6 col-span-12 cursor-pointer" key={i}>
           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex flex-col -mx-4">
               <div className="md:flex-1 px-4">
                 <div className=" rounded-lg flex justify-center mb-4 min-h-[100px]">
                   <img
                     className="h-[320px] object-cover "
                     src={
                       changes.id === data._id && changes.color === 'red' ? data.images[1].url : data.images[0].url
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
                       data?.colors?.map((color,i)=> color === 'gray' ? <button className={
                         ` 
                         w-6 h-6 rounded-full bg-gray-500  mr-2 ${changes.id === data._id && changes.color === 'gray' ? 'border-2 border-[#335dff]' : ''}
                         `
 
                       } key={i} 
                       onClick={()=> handleProductChanges(data,color)}
                       /> : <button className={`
                       w-6 h-6 rounded-full bg-red-500  mr-2 ${changes.id === data._id && changes.color === 'red' ? 'border-2 border-[#335dff]' : ''}
                         
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
                       data?.size.map((size,i)=> <button className={`
                       bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 
                         ${sizeindex.id === data._id && sizeindex.index === i ? 'border-2 border-[#335dff]' : ' border-2 border-transparent'}
 
                       `} key={i}
                       onClick={()=> handleSizeChanges(data,i)}
                       >
                       {size}
                     </button>)
                     }
                   </div>
                   {/* show more details btn */}
                    <Link to={`/product/${data._id}`} className="mt-[10px] bg-gray-200 text-gray-900 py-2 px-4 rounded-full font-bold mr-2 inline-block z-[0] button_hover_regsiter relative overflow-hidden hover:text-white">
                      Show More Details
                     </Link>
                   {/* show more details btn */}
                 </div>
               </div>
             </div>
           </div>
         </div>)
        }
      </div>
      }
     </>
    
    );
};

export default Product;