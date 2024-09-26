'use client'
import { deleteProduct, productSelectors } from '@/features/productSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

const Page = ({ params }: { params: { id: string } }) => {


  const product = useAppSelector(state =>
    productSelectors.selectById(state, (params.id)),
  );

  const router = useRouter()
  if (!product) {
    router.push('/product');
  }

  const dispatch = useAppDispatch();
  const onClickDelete=async()=>{
    const result = await dispatch(deleteProduct(params.id));

    if (deleteProduct.fulfilled.match(result)) {
      // Redirect back or to another route
      router.back();  // This will go to the previous page
      // router.push('/some-other-page'); // You can also redirect to a specific page
    }
  }

  return (
    <div className='mt-20 mx-52 flex justify-center'>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          {/* <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" /> */}
        </figure>
        <div className="card-body">
          <h2 className="card-title">Detail</h2>
          <p>{product?.product_name}</p>
          <div className="card-actions justify-end">
            <div>
              <Link href={`/product/edit/${params.id}`}>
                <button className="btn btn-primary">Edit</button>
              </Link>
                <button onClick={onClickDelete} className="btn btn-primary">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page