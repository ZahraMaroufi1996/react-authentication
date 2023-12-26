import AddProductForm from 'components/product/AddProductForm'
import React from 'react'

const AddProduct = () => {
  return (
    <>
      <div className="card">
        <div className="card-header">افزودن محصول</div>
        <div className="card-body">
          <AddProductForm />
        </div>
      </div>
    </>
  )
}

export default AddProduct
