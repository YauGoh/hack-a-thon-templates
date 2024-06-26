import { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../../createAppSlice";

export interface CounterSliceState {
  value: number;
}

const initialState: CounterSliceState = {
  value: 0,
};

export const counterSlice = createAppSlice({
  name: "counter",
  initialState,
  reducers: (create) => ({
    increment: create.reducer((state) => {
      state.value += 1;
    }),
    decrement: create.reducer((state) => {
      state.value -= 1;
    }),
    incrementByAmount: create.reducer(
      (state, action: PayloadAction<number>) => {
        state.value += action.payload;
      }
    ),
  }),

  selectors: {
    selectCount: (counter) => counter.value,
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const { selectCount } = counterSlice.selectors;
