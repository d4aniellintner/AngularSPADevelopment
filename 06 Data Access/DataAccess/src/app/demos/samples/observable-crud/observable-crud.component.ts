import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VouchersService } from '../voucher.service';
import { Voucher } from '../model';
import { environment } from 'src/environments/environment';

@Component({
<<<<<<< HEAD
	selector: 'app-observable-crud',
	templateUrl: './observable-crud.component.html',
	styleUrls: [ './observable-crud.component.scss' ]
})
export class ObservableCrudComponent implements OnInit {
	constructor(private httpClient: HttpClient, private vs: VouchersService) {}

	result: any;
	fname: string;

	ngOnInit() {}

	getVouchers() {
		this.fname = 'getVouchers()';

		this.httpClient.get<Voucher[]>(`${environment.apiUrl}api/vouchers`).subscribe((data) => {
			this.result = data;
		});
	}

	getVoucher() {
		this.fname = 'getVoucher()';

		this.httpClient.get<Voucher>(`${environment.apiUrl}api/vouchers/2`).subscribe((data) => {
			this.result = data;
		});
	}

	insertVoucher() {
		this.fname = 'insertVoucher()';

		var voucher = { Text: 'Inserted by Angular', Date: new Date() };
		console.log('Voucher to insert: ', voucher);
		this.httpClient.post(`${environment.apiUrl}api/vouchers`, voucher).subscribe((data) => {
			if (data == null) this.result = 'Voucher inserted';
		});
	}

	updateVoucher() {
		this.fname = 'updateVoucher()';

		this.httpClient.get(`${environment.apiUrl}api/vouchers/3`).subscribe((data) => {
			let vtu: Voucher = <Voucher>data;
			vtu.Text = 'Updated by Angular';
			console.log('Voucher to update: ', vtu);

			//to the actual update
			this.httpClient.put(`${environment.apiUrl}api/vouchers/`, vtu).subscribe((data) => {
				this.result = 'voucher updated';
			});
		});
	}

	deleteVoucher() {
		this.fname = 'deleteVoucher()';

		var id = 1002;
		this.httpClient.delete(`${environment.apiUrl}api/vouchers/${id}`).subscribe((data) => {
			this.result = `voucher with id ${id} deleted`;
			console.log(this.result);
		});
	}

	getSum() {
		this.fname = 'getSum()';

		this.httpClient.get(`${environment.apiUrl}api/vouchers/getsum/true`).subscribe((response) => {
			this.result = response;
			console.log('getSum()', this.result);
		});
	}

	getVM() {
		this.fname = 'getVM()';

		this.httpClient.get(`${environment.apiUrl}api/vouchers/getvm/1`).subscribe((data) => {
			this.result = data;
		});
	}

	doSave() {
		this.fname = 'doSave()';

		let voucher = {
			ID: 2,
			Text: 'BP Tankstelle',
			Date: '2017-06-27T14:30:04.8849651',
			Amount: 65,
			Paid: false,
			Expense: true,
			Remark: true
		};

		console.log('Saving voucher ', voucher);

		this.httpClient.post(`${environment.apiUrl}api/vouchers/save`, voucher).subscribe((data) => {
			(response) => (this.result = `Voucher with id ${response} was saved`);
		});
	}
=======
  selector: 'app-observable-crud',
  templateUrl: './observable-crud.component.html',
  styleUrls: ['./observable-crud.component.scss']
})
export class ObservableCrudComponent implements OnInit {
  constructor(private httpClient: HttpClient, private vs: VouchersService) {}

  result: any;
  fname: string;

  ngOnInit() {}

  getVouchers() {
    this.fname = 'getVouchers()';

    this.httpClient
      .get<Voucher[]>(`${environment.apiUrl}api/vouchers`)
      .subscribe(data => {
        this.result = data;
      });
  }

  getVoucher() {
    this.fname = 'getVoucher()';

    this.httpClient
      .get<Voucher>(`${environment.apiUrl}api/vouchers/2`)
      .subscribe(data => {
        this.result = data;
      });
  }

  insertVoucher() {
    this.fname = 'insertVoucher()';

    var voucher = { Text: 'Inserted by Angular', Date: new Date() };
    console.log('Voucher to insert: ', voucher);
    this.httpClient
      .post(`${environment.apiUrl}api/vouchers`, voucher)
      .subscribe(data => {
        if (data == null) this.result = 'Voucher inserted';
      });
  }

  updateVoucher() {
    this.fname = 'updateVoucher()';

    this.httpClient
      .get(`${environment.apiUrl}api/vouchers/3`)
      .subscribe(data => {
        let vtu: Voucher = <Voucher>data;
        vtu.Text = 'Updated by Angular';
        console.log('Voucher to update: ', vtu);

        //Update
        this.httpClient
          .put(`${environment.apiUrl}api/vouchers/`, vtu)
          .subscribe(data => {
            this.result = 'voucher updated';
          });
      });
  }

  deleteVoucher() {
    this.fname = 'deleteVoucher()';

    var id = 1002;
    this.httpClient
      .delete(`${environment.apiUrl}api/vouchers/${id}`)
      .subscribe(data => {
        this.result = `voucher with id ${id} deleted`;
        console.log(this.result);
      });
  }

  getSum() {
    this.fname = 'getSum()';

    this.httpClient
      .get(`${environment.apiUrl}api/vouchers/getsum/true`)
      .subscribe(response => {
        this.result = response;
        console.log('getSum()', this.result);
      });
  }

  getVM() {
    this.fname = 'getVM()';

    this.httpClient
      .get(`${environment.apiUrl}api/vouchers/getvm/1`)
      .subscribe(data => {
        this.result = data;
      });
  }

  doSave() {
    this.fname = 'doSave()';

    let voucher = {
      ID: 2,
      Text: 'BP Tankstelle',
      Date: '2017-06-27T14:30:04.8849651',
      Amount: 65,
      Paid: false,
      Expense: true,
      Remark: true
    };

    console.log('Saving voucher ', voucher);

    this.httpClient
      .post(`${environment.apiUrl}api/vouchers/save`, voucher)
      .subscribe(data => {
        response => (this.result = `Voucher with id ${response} was saved`);
      });
  }
>>>>>>> d461ad3d62053e1e339b99d6eecd6f5f48a0d668
}
