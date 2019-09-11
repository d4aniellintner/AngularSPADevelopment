import { Action } from "@ngrx/store";
import { Voucher } from "../../samples/model";

export enum VouchersActionTypes {
  AddVoucher = "[Skill] Add Voucher",
  DeleteVoucher = "[Skill] Delete Voucher"
}

export class AddVoucher implements Action {
  readonly type = VouchersActionTypes.AddVoucher;
  constructor(public payload: Voucher) {}
}

//Not implemented in reducer - just here to demonstrate union type: VochersActions
export class DeleteVoucher implements Action {
  readonly type = VouchersActionTypes.DeleteVoucher;
  constructor(public payload: Voucher) {}
}

export type VouchersActions = AddVoucher | DeleteVoucher;
