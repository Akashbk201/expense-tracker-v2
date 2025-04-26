import React from "react";
import { useForm } from "react-hook-form";

function Form({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => console.log(typeof data.Expence);

  const allCategory = ["Food", "Travel", "Cloath", "Rent"];

  return (
    <>
      <div className="from-sec">
        <div className="container">
          <div className="form-box">
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
              {errors.Month?.type === "required" && (
                <p className="text-sm text-red-400 font-light text-left">
                  This field is required
                </p>
              )}

              {errors.Month?.type === "maxLength" && (
                <p className="text-sm text-red-400 font-light text-left">
                  Note: Max Charecter Limit - 8
                </p>
              )}

              <input
                {...register("month", { required: true, maxLength: 8 })}
                type="text"
                placeholder="Month"
                className="w-full py-1 text-gray-900 text-lg font-normal px-2 border-[1px] border-gray-500 rounded-lg mb-3"
              />

              {errors.Expence?.type === "required" && (
                <p className="text-sm text-red-400 font-light text-left">
                  This field is required
                </p>
              )}

              {errors.Expence?.type === "maxLength" && (
                <p className="text-sm text-red-400 font-light text-left">
                  Note: Max Charecter Limit - 4
                </p>
              )}
              <input
                {...register("cost", { required: true, maxLength: 4 })}
                type="number"
                placeholder="Expence"
                className="w-full py-1 text-gray-900 text-lg font-normal px-2 border-[1px] border-gray-500 rounded-lg mb-3"
              />
              {errors.Category && (
                <p className="text-sm text-red-400 font-light text-left">
                  This field is required
                </p>
              )}
              <select
                {...register("category")}
                className="w-full px-2 py-2 border-[1px] border-gray-500 rounded-lg text-lg text-gray-900 mb-5"
              >
                {allCategory.map((category) => (
                  <option
                    key={category}
                    value={category}
                    className="px-2 text-gray-900"
                  >
                    {category}
                  </option>
                ))}
              </select>

              <input
                type="submit"
                className="w-full bg-indigo-950 text-slate-50 text-base font-normal py-2 rounded-lg text-center cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
