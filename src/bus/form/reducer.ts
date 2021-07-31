// Core
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// Interfaces
import {IForm} from './interface';

const initialState: IForm = {
  text: '',
  price: ''
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    // changeValue(state, action: PayloadAction<{ type: string, value: string }>) {
    //   const {type, value} = action.payload;
    //   state = {
    //     ...state,
    //     [type]: value
    //   }
    // },
    changeTextValue(state, action: PayloadAction<{ value: string }>) {
      const {value} = action.payload;
      state.text = value;
    },
    changePriceValue(state, action: PayloadAction<{ value: string }>) {
      const {value} = action.payload;
      state.price = value;
    },
    clearForm(state) {
      state.text = '';
      state.price = '';
    }
  }
});

export const {changeTextValue, changePriceValue, clearForm} = formSlice.actions;
export default formSlice.reducer;
