import React, {useEffect, useState} from "react";
import {RemoveModal} from "../components/productlist/RemoveModal";

const data = [
  {name: "A51", price: 6_500_000, category: "موبایل", availability: 14},
  {name: "A52", price: 5_500_000, category: "موبایل", availability: 57},
  {name: "A53", price: 4_500_000, category: "موبایل", availability: 21},
  {name: "A54", price: 7_500_000, category: "موبایل", availability: 33},
  {name: "A55", price: 3_500_000, category: "موبایل", availability: 62},
  {name: "A56", price: 1_500_000, category: "موبایل", availability: 25},
]

const ProductsList = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(data)
  }, [])

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            {products.length === 0 &&
            <p>محصولی موجود نمی‌باشد، برای افزودن محصول جدید روی "افزودن محصول" در منوی سمت راست کلیک نمایید!</p>}
            {products.length > 0 && <table className="table table-sm table-striped align-middle">
              <thead>
              <tr>
                <th scope="col">
                  نام محصول
                </th>
                <th scope="col">
                  قیمت
                </th>
                <th scope="col">
                  دسته‌بندی
                </th>
                <th scope="col">
                  موجودی
                </th>
                <th scope="col"/>
              </tr>
              </thead>
              <tbody>
              {products.map(product => <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.availability}</td>
                <td>
                  <div className="btn-group" role="group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => setIsOpen(true)}
                    >
                      حذف
                    </button>
                    <button type="button" className="btn btn-sm btn-outline-info">ویرایش</button>
                  </div>
                </td>
              </tr>)}
              </tbody>
            </table>
            }
          </div>
        </div>
      </div>
      <RemoveModal isOpen={isOpen} onClose={() => setIsOpen(false)} onConfirm={() => setIsOpen(false)}/>
    </>
  );
};

export default ProductsList;
