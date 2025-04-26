import React from "react";

function ExpenseList({ expenseList, onDelete }) {
  const expenseTotal = expenseList.reduce(
    (prev, curr) => prev + parseInt(curr.cost),
    0
  );

  return (
    <>
      <div className="list-sec">
        <div className="container">
          <div className="list-box">
            <div className="grid grid-cols-12 py-2 bg-indigo-200 mb-2">
              <div className="col-span-3">
                <p className="table-heading">Month</p>
              </div>
              <div className="col-span-3">
                <p className="table-heading">Category</p>
              </div>
              <div className="col-span-3">
                <p className="table-heading">Expense</p>
              </div>
              <div className="col-span-3">
                <p className="table-heading">Delete</p>
              </div>
            </div>

            {/* Table Rows */}

            {expenseList.length === 0 ? (
              <p className="block text-center text-xl font-semibold text-slate-100 py-1">
                There is no data to show!
              </p>
            ) : (
              expenseList.map((data) => (
                <div className="grid grid-cols-12 py-4" key={data.id}>
                  <div className="col-span-3">
                    <p className="table-data">{data.month}</p>
                  </div>
                  <div className="col-span-3">
                    <p className="table-data">{data.category}</p>
                  </div>
                  <div className="col-span-3">
                    <p className="table-data">${data.cost}</p>
                  </div>
                  <div className="col-span-3 text-center">
                    <button
                      className="data-del"
                      onClick={() => onDelete(data.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}

            <div className="grid grid-cols-12 mt-2 py-4 border-t-[1px] border-indigo-400">
              <div className="col-span-3"></div>
              <div className="col-span-3">
                <p className="text-sm md:text-lg text-slate-400 font-normal text-center block">
                  Total
                </p>
              </div>
              <div className="col-span-3">
                <p className="text-sm md:text-lg text-slate-200 font-normal text-center block">
                  $ {expenseTotal}
                </p>
              </div>
              <div className="col-span-3"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpenseList;
