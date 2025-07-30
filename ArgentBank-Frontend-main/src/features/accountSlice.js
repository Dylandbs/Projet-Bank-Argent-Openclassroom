import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "accounts",
  initialState: {
    accounts: [
      {
        id: 1,
        visite: "3500",
        balance: "50,000.76",
        transactions: [
          {
            id: 1,
            date: "27/02/20",
            description: "Golden sun bakery",
            amount: "$8.00",
            balance: "$298.00",
            details: [
              {
                type: "Electronic",
                category: "Food",
                note: "for the breakfeast",
              },
            ],
          },
          {
            id: 2,
            date: "27/02/20",
            description: "Golden sun bakery",
            amount: "$8.00",
            balance: "$298.00",
            details: [
              {
                type: "Electronic",
                category: "Food",
                note: "for the breakfeast",
              },
            ],
          },
          {
            id: 3,
            date: "27/02/20",
            description: "Golden sun bakery",
            amount: "$8.00",
            balance: "$298.00",
            details: [
              {
                type: "Electronic",
                category: "Food",
                note: "for the breakfeast",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        visite: "3200",
        balance: "20,500.76",
        transactions: [
          {
            id: 4,
            date: "27/02/20",
            description: "Golden sun bakery",
            amount: "$8.00",
            balance: "$298.00",
          },
        ],
      },
    ],
    accountId: null,
    transactionId: null,
    editeNote: {
      active: false,
      transactionId: null,
    },
    category: ["Food", "Sport", "Multimedia", "Hobby", "Family"],
    categoryEditState: {
      active: false,
      transactionId: null,
    },
  },
  reducers: {
    setActiveAccount: (state, action) => {
      state.accountId =
        state.accountId === action.payload ? null : action.payload;
    },
    toggleTransaction: (state, action) => {
      state.transactionId =
        state.transactionId === action.payload ? null : action.payload;
      if (state.transactionId !== action.payload) {
        state.editeNote = {
          active: false,
          transactionId: null,
        };
      }
    },
    toggleEditeNote: (state, action) => {
      state.editeNote = {
        active: !state.editeNote.active,
        transactionId: action.payload,
      };
    },
    updateTransactionNote: (state, action) => {
      const { transactionId, note } = action.payload;
      const account = state.accounts.find((a) =>
        a.transactions.some((t) => t.id === transactionId)
      );
      if (account) {
        const transaction = account.transactions.find(
          (t) => t.id === transactionId
        );
        if (transaction) {
          transaction.details[0].note = note;
        }
      }
    },
    toggleCategorySelect: (state, action) => {
      state.categoryEditState = {
        active: !state.categoryEditState.active,
        transactionId: action.payload,
      };
    },
    updateTransactionCategory: (state, action) => {
      const { transactionId, category } = action.payload;
      const account = state.accounts.find((a) =>
        a.transactions.some((t) => t.id === transactionId)
      );
      if (account) {
        const transaction = account.transactions.find(
          (t) => t.id === transactionId
        );
        if (transaction) { 
          transaction.details[0].category = category;
        }
      }
    },
  },
});

export const {
  setActiveAccount,
  toggleTransaction,
  toggleEditeNote,
  toggleCategorySelect,
  updateTransactionNote,
  updateTransactionCategory,
} = accountSlice.actions;

export default accountSlice.reducer;
