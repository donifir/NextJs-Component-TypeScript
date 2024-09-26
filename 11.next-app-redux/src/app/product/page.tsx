'use client'
import { getProductList, productSelectors } from '@/features/productSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import Link from 'next/link';
import React, { useEffect } from 'react'

const page = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(productSelectors.selectAll);

  useEffect(() => {
    dispatch(getProductList());
  }, []);

  return (
    <div className='px-52 pt-20'>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.product_name}</td>
                <td>{product.stock}</td>
                <td>
                  <Link href={`/product/detail/${product.id}`}>
                    <button className="btn">Detail</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link href="/product/create">
          <button className="btn">Create</button>
        </Link>
      </div>
    </div>
  )
}

export default page