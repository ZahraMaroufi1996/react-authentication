import React from "react";

import { useForm } from "react-hook-form";

const AddProductForm = ({
  title = "",
  price = "",
  description = "",
  stock = "",
  category = "",
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title,
      price,
      description,
      stock,
      category,
    },
  });

  const onSubmit = (data) => console.log(errors, data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="titleInput" className="form-label">
            عنوان
          </label>
          <input
            type="text"
            className={`form-control${errors.title ? " is-invalid" : ""}`}
            id="titleInput"
            placeholder="گوشی‌ موبایل"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <div className="invalid-feedback">وارد کردن عنوان اجباری است.</div>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="priceInput" className="form-label">
            قیمت
          </label>
          <input
            type="number"
            className={`form-control${errors.price ? " is-invalid" : ""}`}
            id="priceInput"
            placeholder="1000"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <div className="invalid-feedback">وارد کردن قیمت اجباری است.</div>
          )}
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <label htmlFor="stockInput" className="form-label">
            موجودی
          </label>
          <input
            type="number"
            className={`form-control${errors.stock ? " is-invalid" : ""}`}
            id="stockInput"
            placeholder="10"
            {...register("stock", { required: true })}
          />
          {errors.stock && (
            <div className="invalid-feedback">وارد کردن موجودی اجباری است.</div>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="categorySelect" className="form-label">
            دسته‌بندی
          </label>
          <select
            className="form-select"
            id="categorySelect"
            {...register("category", { required: true })}
          >
            <option disabled="disabled">...</option>
            <option value="1">موبایل</option>
            <option value="2">کفش</option>
            <option value="3">تیشرت</option>
          </select>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <label htmlFor="descriptionTextarea" className="form-label">
            توضیحات
          </label>
          <textarea
            className={`form-control${errors.description ? " is-invalid" : ""}`}
            id="descriptionTextarea"
            rows="3"
            {...register("description", {})}
          />
          {errors.description && (
            <div className="invalid-feedback">وارد کردن موجودی اجباری است.</div>
          )}
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-4 float-start">
        افزودن محصول
      </button>
    </form>
  );
};

export default AddProductForm;
