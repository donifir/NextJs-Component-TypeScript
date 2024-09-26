
'use client'

import { createProduct } from '@/features/productSlice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { useRouter } from 'next/navigation'
import React, { SyntheticEvent, useState } from 'react'

const page = () => {
  const [productName, setProductName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [stok, setStok] = useState<any>(19)

  const router = useRouter()
  const dispatch = useAppDispatch();
  const dataError = useAppSelector((state) => state.product.dataError);
  
  const onSubmit = async(e: SyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("product_name", productName);
    formData.append("description", description);
    formData.append("stock", stok);
    formData.append("suplier_id", '1');
    // dispatch(createProduct(formData))
    try {
      const actionResult = await dispatch(createProduct(formData));
      if (createProduct.fulfilled.match(actionResult)) {
        // router.push('/your-success-page'); 
        router.back()
      }
    } catch (error) {
      console.error('Failed to submit: ', error);
    }
  }

  return (
    <div className='px-52 pt-20'>
      <form onSubmit={onSubmit}>
        <div className="mt-4">
          <div className="flex flex-row justify-between">
            <label className="text-slate-700">
               Product Name
            </label>
            {/* @ts-ignore	 */}
            <span className="text-red-500">{dataError?.product_name ? dataError?.product_name : ''}</span>
          </div>
          <input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full mt-2"
          />
        </div>

        <div className="mt-4">
          <div className="flex flex-row justify-between">
            <label className="text-slate-700">
              description
            </label>
            {/* @ts-ignore	 */}
            <span className="text-red-500">{dataError.description ? dataError.description : ''}</span>
          </div>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full mt-2"
          />
        </div>

        <div className="mt-4">
          <div className="flex flex-row justify-between">
            <label className="text-slate-700">
              Stock
            </label>
            {/* @ts-ignore	 */}
            <span className="text-red-500">{dataError.stock ? dataError.stock : ''}</span>
          </div>
          <input
            value={stok}
            onChange={(e) => setStok(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full mt-2"
          />
        </div>










        <div className="mt-4">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>

    </div>
  )
}

export default page