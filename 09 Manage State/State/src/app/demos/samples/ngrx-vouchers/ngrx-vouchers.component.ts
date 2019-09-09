import { Component, OnInit } from "@angular/core";
import { Voucher } from "../model";
import { MatTableDataSource } from "@angular/material";
import { VouchersService } from "../voucher.service";

@Component({
  selector: "app-ngrx-vouchers",
  templateUrl: "./ngrx-vouchers.component.html",
  styleUrls: ["./ngrx-vouchers.component.scss"]
})
export class NgrxVouchersComponent implements OnInit {
  vouchers: Voucher[];
  dataSource: MatTableDataSource<Voucher>;
  displayedColumns = ["ID", "Text", "Date", "Amount"];

  constructor(private vs: VouchersService) {}

  ngOnInit() {
    this.vs.getVouchers().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
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
