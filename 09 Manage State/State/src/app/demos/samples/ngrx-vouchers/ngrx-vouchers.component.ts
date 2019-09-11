import { Component, OnInit } from "@angular/core";
import { Voucher } from "../model";
import { MatTableDataSource } from "@angular/material";
import { VouchersService } from "../voucher.service";
import { Store } from "@ngrx/store";
import { pipe } from "rxjs";
import { tap } from "rxjs/operators";
import { getAllVouchers } from "../../store/reducers/demos.reducer";

@Component({
  selector: "app-ngrx-vouchers",
  templateUrl: "./ngrx-vouchers.component.html",
  styleUrls: ["./ngrx-vouchers.component.scss"]
})
export class NgrxVouchersComponent implements OnInit {
  dataSource: MatTableDataSource<Voucher>;
  displayedColumns = ["ID", "Text", "Date", "Amount"];

  constructor(private store: Store<{ vouchers: Voucher[] }>) {}

  ngOnInit() {
    this.store
      .select(getAllVouchers)
      .pipe(tap(data => console.log("data received from store", data)))
      .subscribe(data => {
        // this.dataSource = new MatTableDataSource(data);
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  editItem(row) {
    console.log("Edit Row", row);
  }
}
