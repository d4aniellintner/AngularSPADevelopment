import { initialVoucher } from "../../initialVoucher";
import { VouchersActionTypes, VouchersActions } from "../actions/demos.actions";
import { Voucher } from "../../samples/model";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const demosFeatureKey = "demos";

export interface DemoState {
  vouchers: Voucher[];
}

export const initialState: DemoState = {
  vouchers: initialVoucher
};

export function reducer(state = initialState, action: VouchersActions) {
  switch (action.type) {
    case VouchersActionTypes.AddVoucher:
      state.vouchers.push(action.payload);
      return { ...state };
    // case VouchersActionTypes.DeleteVoucher:
    //   return [state.find(s => s.ID != action.payload.ID)];
    default:
      return state;
  }
}

//Slices

export const getVouchers = (state: DemoState) => state.vouchers;

//Selectors
export const getDemoState = createFeatureSelector<DemoState>(demosFeatureKey);

export const getAllVouchers = createSelector(
  getDemoState,
  (state: DemoState) => state.vouchers
);
