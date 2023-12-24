import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCartStore, useProductStore } from '../../../store/productStore';

const ProductDetails = () => {
  const getProducts= useProductStore(state => state.getProducts)
  const cartItems = useCartStore(state => state.cartItems)
  const addToCart = useCartStore(state => state.addToCart)
  const {id} = useParams()
  const {product} = useProductStore(state => state.products)
  const [getProduct,setGetProduct] =useState()
  const [changes, setChanges] = useState({})
  const [sizeindex, setSizeindex] = useState({})
  useEffect(()=> {
    if(id){
      getProducts()
     }
  },[id])
  useEffect(()=> {
    if(product?.length > 0){
      const newProduct = product?.find((item)=> item._id === id)
      setGetProduct(newProduct)}

    },[product])
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);
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
  const addProductCart = () => {
    const product={
      _id: getProduct._id,
      name: getProduct.name,
      price: getProduct.price,
      image: changes.id === getProduct?._id && changes.color === 'red' ? getProduct?.images[1].url : getProduct?.images[0].url ,
      color: changes.color || 'gray',
      size: getProduct.size[sizeindex.index ||0],
      quantity: 1,
    }
    addToCart(product)
  }
  return (
        <div className="bg-white py-8 mt-[70px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className=" rounded-lg flex justify-center mb-4 min-h-[100px]">
                <img
                  className="h-[380px] object-cover"
                  src={
                    changes.id === getProduct?._id && changes.color === 'red' ? getProduct?.images[1].url : getProduct?.images[0].url
                  }
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
                  onClick={addProductCart}
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300 "
                  onClick={addProductCart}
                  >
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800  mb-2">
               {getProduct?.name}
              </h2>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 ">
                    Price:
                  </span>
                  <span className="text-gray-600 ">{
                    getProduct?.price
                  }</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 ">
                    Availability:
                  </span>
                  <span className="text-gray-600 ">{
                    getProduct?.availability
                  }</span>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700 ">
                  Select Color:
                </span>
                <div className="flex items-center mt-2">
                     {
                       getProduct?.colors?.map((color,i)=> color === 'gray' ? <button className={
                         ` 
                         w-6 h-6 rounded-full bg-gray-500  mr-2 ${changes.id === getProduct._id && changes.color === 'gray' ? 'border-2 border-[#335dff]' : ''}
                         `
 
                       } key={i} 
                       onClick={()=> handleProductChanges(getProduct,color)}
                       /> : <button className={`
                       w-6 h-6 rounded-full bg-red-500  mr-2 ${changes.id === getProduct._id && changes.color === 'red' ? 'border-2 border-[#335dff]' : ''}
                         
                       `} key={i} 
                       onClick={()=> handleProductChanges(getProduct,color)}
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
                       getProduct?.size.map((size,i)=> <button className={`
                       bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 
                         ${sizeindex.id === getProduct._id && sizeindex.index === i ? 'border-2 border-[#335dff]' : ' border-2 border-transparent'}
 
                       `} key={i}
                       onClick={()=> handleSizeChanges(getProduct,i)}
                       >
                       {size}
                     </button>)
                     }
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700">
                  Product Description:
                </span>
                <p className="text-gray-600 text-sm mt-2">
                  {getProduct?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      );
};

export default ProductDetails;