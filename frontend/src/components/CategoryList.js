import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { Link } from 'react-router-dom'

const CategoryList = () => {
    const [categoryProduct,setCategoryProduct] = useState([])
    const [loading,setLoading] = useState(false)

    const categoryLoading = new Array(4).fill(null)

    const fetchCategoryProduct = async() =>{
        setLoading(true)
        const response = await fetch(SummaryApi.categoryProduct.url)
        const dataResponse = await response.json()
        setLoading(false)
        setCategoryProduct(dataResponse.data)
    }

    useEffect(()=>{
        fetchCategoryProduct()
    },[])

  return (
    <div className='container mx-auto p-4'>
    <div className='flex items-center gap-8 overflow-scroll scrollbar-none bg-red-600'>
        {loading ? (
            categoryLoading.map((el,index)=>{
                return(
                    <div className='h-16 w-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-red-200 animate-pulse' key={"categoryLoading"+index}></div>
                )
            })  
        ) : (
            categoryProduct.map((product,index)=>{
                return(
                    <div className="flex flex-col items-center" key={product?.category}>
                        <Link to={"/product-category?category="+product?.category} className='cursor-pointer'>
                            <div className='w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-slate-200 flex items-center justify-center'>
                                <img src={product?.productImage[0]} alt={product?.category} className='h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all'/>
                            </div>
                        </Link>
                        <p className='text-center text-sm md:text-base capitalize'>{product?.category}</p>
                    </div>
                )
            })
        )}
    </div>
</div>


  )
}

export default CategoryList