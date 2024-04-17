import { createSlice } from '@reduxjs/toolkit';
import { RIGHT_PAGE_CONTENT } from '../../utils/constant';

const initialState = {
  rightPageContent: RIGHT_PAGE_CONTENT.CUSTOMER,
  selectedCustomer: {},
  customers: [],
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    prepareData: () => { },
    changeRightPageContent: (state, action) => {
      state.rightPageContent = action.payload;
    },
    setSelectedCustomer: (state, action) => {
      state.selectedCustomer = action.payload.selectedCustomer;
    },
    getAllCustomers: () => { },
    getAllCustomersSuccess: (state, action) => {
      state.customers = action.payload.customers;
    },
    getAllCustomersFail: () => { },
  }
});

export const customerActions = customerSlice.actions;
export default customerSlice.reducer;