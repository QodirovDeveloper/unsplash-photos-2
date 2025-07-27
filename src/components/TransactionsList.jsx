import { FaTrash } from "react-icons/fa";

function TransactionsList({ transactions }) {
  return (
    <div>
      {transactions.map((transaction) => {
        const { id, title, price } = transaction;
        return (
          <div key={id} className="">
            <h4>{title}</h4>
            <p> ${price}</p>
            <span>
              <FaTrash />
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default TransactionsList;
