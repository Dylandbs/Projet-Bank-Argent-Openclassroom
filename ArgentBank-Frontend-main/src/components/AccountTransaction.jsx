import { useDispatch, useSelector } from "react-redux";
import {
  toggleTransaction,
  toggleEditeNote,
  toggleCategorySelect,
  updateTransactionNote,
  updateTransactionCategory,
} from "../features/accountSlice";
import { useState, useEffect, useRef } from "react";

const AccountTransaction = ({ transactions }) => {
  const transactionId = useSelector((state) => state.accounts.transactionId);
  const editNote = useSelector((state) => state.accounts.editeNote);
  const editCategory = useSelector((state) => state.accounts.categoryEditState);
  const categories = useSelector((state) => state.accounts.category);
  const [localNote, setLocalNote] = useState("");
  const [localCategory, setLocalCategory] = useState("");
  const dispatch = useDispatch();
  const originalNoteRef = useRef("");
  const originalCategoryRef = useRef("");

  useEffect(() => {
    const currentTransaction = transactions.find(
      (transac) => transac.id === transactionId
    );
    if (currentTransaction?.details?.[0]) {
      const noteValue = currentTransaction.details[0].note || "";
      setLocalNote(noteValue);
      originalNoteRef.current = noteValue;
    } else {
      setLocalNote("");
    }
  }, [transactionId, transactions]);

  useEffect(() => {
    const currentTransaction = transactions.find(
      (transac) => transac.id === transactionId
    );
    if (currentTransaction?.details?.[0]) {
      const CategorySelect = currentTransaction.details[0].category || "";
      setLocalCategory(CategorySelect);
      originalCategoryRef.current = CategorySelect;
    } else {
      setLocalCategory("");
    }
  }, [transactionId, transactions]);

  const handleClick = (id) => {
    dispatch(toggleTransaction(id));
  };

  const handleEditNote = () => {
    if (editNote.active) {
      dispatch(
        updateTransactionNote({
          transactionId,
          note: localNote,
        })
      );
    }
    dispatch(toggleEditeNote(transactionId));
  };

  const handleCategorySelect = () => {
    if (editCategory.active) {
      dispatch(
        updateTransactionCategory({
          transactionId,
          category: localCategory,
        })
      );
    }
    dispatch(toggleCategorySelect(transactionId));
  };

  const handleCancelEdit = () => {
    setLocalNote(originalNoteRef.current);
    dispatch(toggleEditeNote(transactionId));
  };

  const handleCancelSelect = () => {
    setLocalNote(originalCategoryRef.current);
    dispatch(toggleCategorySelect(transactionId));
  };

  const handleNoteChange = (e) => {
    setLocalNote(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setLocalCategory(e.target.value);
  };

  return (
    <div className="transaction_card_container">
      <div className="transaction_card">
        <p>Date</p>
        <p>Description</p>
        <p></p>
        <p>Amount</p>
        <p>Balance</p>
        <div className="transaction_card_icon_placeholder"></div>
      </div>
      {transactions.map((transaction, index) => (
        <div className="transaction_card_info" key={index}>
          <div className="transaction_main_content">
            <p>{transaction.date}</p>
            <p className="transaction_description">{transaction.description}</p>
            <p></p>
            <p>{transaction.amount}</p>
            <p>{transaction.balance}</p>
            <i
              className={`fa-solid ${
                transactionId === transaction.id
                  ? "fa-xmark"
                  : "fa-chevron-right"
              } transition-icon`}
              onClick={() => handleClick(transaction.id)}
            ></i>
          </div>
          {transactionId === transaction.id && (
            <div className="transaction-details">
              <div className="details-labels">
                <p>Transaction Type:</p>
                <p>Category:</p>
                <p>Note:</p>
              </div>
              <div className="details-values">
                <p>{transaction.details?.[0]?.type || "-"}</p>

                {!editCategory.active ||
                editCategory.transactionId !== transaction.id ? (
                  <div className="category_container">
                    <p>{transaction.details?.[0]?.category || "-"}</p>
                    <button onClick={handleCategorySelect}>
                      <i className="fa-solid fa-pencil"></i>
                    </button>
                  </div>
                ) : (
                  <div className="category_edit">
                    <select
                      name="category"
                      id="category"
                      value={localCategory}
                      onChange={handleCategoryChange}
                    >
                      {categories.map((categorie, index) => (
                        <option key={index} value={categorie}>
                          {categorie}
                        </option>
                      ))}
                    </select>
                    <button onClick={handleCategorySelect}>
                      <i className="fa-solid fa-check"></i>
                    </button>
                    <button
                      onClick={handleCancelSelect}
                      className="cancel_button"
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                )}

                {!editNote.active ||
                editNote.transactionId !== transaction.id ? (
                  <div className="note_container">
                    <p>{transaction.details?.[0]?.note || "-"}</p>
                    <button onClick={handleEditNote}>
                      <i className="fa-solid fa-pencil"></i>
                    </button>
                  </div>
                ) : (
                  <div className="edite_note">
                    <input
                      type="text"
                      value={localNote}
                      onChange={handleNoteChange}
                      autoFocus
                    />
                    <button onClick={handleEditNote}>
                      <i className="fa-solid fa-check"></i>
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="cancel_button"
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccountTransaction;
