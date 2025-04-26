import { useState } from "react";
import "./App.css";
import ExpenseList from "./assets/Components/ExpenseList";
import Filter from "./assets/Components/Filter";
import Form from "./assets/Components/Form";

function App() {
  const [expenseList, setExpenseList] = useState([
    {
      id: 1,
      month: "january",
      category: "Food",
      cost: 250,
    },
    {
      id: 2,
      month: "january",
      category: "Travel",
      cost: 150,
    },
    {
      id: 3,
      month: "february",
      category: "Food",
      cost: 550,
    },
    {
      id: 4,
      month: "january",
      category: "Cloath",
      cost: 100,
    },
  ]);

  const [selectCategory, setSelectCategory] = useState("");

  const filter = selectCategory
    ? expenseList.filter((data) => data.category === selectCategory)
    : expenseList;

  return (
    <>
      <div className="title-sec">
        <div className="container">
          <div className="title-box">
            <h1>Expence Tracker</h1>
          </div>
        </div>
      </div>
      <Form
        onSubmit={(data) =>
          setExpenseList([
            ...expenseList,
            { ...data, id: expenseList.length + 1 },
          ])
        }
      />
      <Filter onSelect={(category) => setSelectCategory(category)} />
      <ExpenseList
        expenseList={filter}
        onDelete={(id) =>
          setExpenseList(expenseList.filter((data) => data.id !== id))
        }
      />

      <footer className="footer-sec">
        <div className="container">
          <div className="footer-content">
            <p>
              Developed by {""}
              <a target="_blank" href="https://bento.me/akashbk201">
                Akashbk201
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
