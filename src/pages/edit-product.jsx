import AddProductForm from 'components/product/AddProductForm'
import { useParams } from 'react-router-dom'

const product = {
  title: 'موبایل',
  price: 10000,
  category: 1,
  stock: 10,
  description: 'این یک گوشی موبایل است',
}

const EditProduct = () => {
  const { id: productId } = useParams()
  return (
    <div className="card">
      <div className="card-header">ویرایش محصول {productId}</div>
      <div className="card-body">
        <AddProductForm {...product} />
      </div>
    </div>
  )
}

export default EditProduct
