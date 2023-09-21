import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isSeller: false,
  isLoading: true,
  seller: null,
  error: null,
};

export const sellerReducer = createReducer(initialState, {
  LoadSellerRequest: (state) => {
    state.isLoading = true;
  },
  LoadSellerSuccess: (state, action) => {
    state.isSeller = true;
    state.isLoading = false;
    state.seller = action.payload;
    state.error = null; // Reset the error when the seller data is successfully loaded.
  },
  LoadSellerFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.isSeller = false;
    state.seller = null; // Reset the seller data in case of failure.
  },

  // get all sellers ---admin
  getAllSellersRequest: (state) => {
    state.isLoading = true;
  },
  getAllSellersSuccess: (state, action) => {
    state.isLoading = false;
    state.sellers = action.payload;
  },
  getAllSellerFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  clearErrors: (state) => {
    state.error = null;
  },
});
