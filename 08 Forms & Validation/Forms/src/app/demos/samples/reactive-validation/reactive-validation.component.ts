import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
=======
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
>>>>>>> d461ad3d62053e1e339b99d6eecd6f5f48a0d668
import { emptyPerson, wealthOpts } from '../empty-person';
import { Person } from '../person';
import { PersonService } from '../person.service';
import { asyncMailExistsValidator } from './asyncMailExistsValidator';

@Component({
<<<<<<< HEAD
	selector: 'app-reactive-validation',
	templateUrl: './reactive-validation.component.html',
	styleUrls: [ './reactive-validation.component.scss' ]
=======
  selector: 'app-reactive-validation',
  templateUrl: './reactive-validation.component.html',
  styleUrls: ['./reactive-validation.component.scss']
>>>>>>> d461ad3d62053e1e339b99d6eecd6f5f48a0d668
})
export class ReactiveValidationComponent implements OnInit {
	person: Person = emptyPerson;
	wealthOpts = wealthOpts;

	personForm: FormGroup;

<<<<<<< HEAD
	constructor(
		private fb: FormBuilder,
		private ps: PersonService,
		private mailExistsValidator: asyncMailExistsValidator
	) {}
=======
  constructor(
    private fb: FormBuilder,
    private ps: PersonService,
    private mailExistsValidator: asyncMailExistsValidator
  ) {}
>>>>>>> d461ad3d62053e1e339b99d6eecd6f5f48a0d668

	ngOnInit() {
		this.loadData();
		this.initForm();
		this.subscribeChanges();
	}

	private loadData() {
		this.ps.getPerson().subscribe((p) => {
			this.personForm.setValue(p);
		});
	}

<<<<<<< HEAD
	private initForm() {
		this.personForm = this.fb.group({
			name: [ this.person.name, [ Validators.required, Validators.minLength(4), this.validateName ] ],
			age: [ this.person.age, [ Validators.min(18), Validators.max(99) ] ],
			gender: [ this.person.gender ],
			email: [
				this.person.email,
				[ Validators.required, Validators.email ],
				[ this.mailExistsValidator ],
				{ updateOn: 'blur' }
			],
			wealth: [ this.person.wealth ]
		});
	}

	private subscribeChanges() {
		this.personForm.valueChanges.subscribe((vals) => {
			console.log('changes happening @form: ', vals);
		});
	}
=======
  private initForm() {
    this.personForm = this.fb.group({
      name: [
        this.person.name,
        [Validators.required, Validators.minLength(4), this.validateName]
      ],
      age: [this.person.age, [Validators.min(18), Validators.max(99)]],
      gender: [this.person.gender],
      email: [
        this.person.email,
        [Validators.required, Validators.email],
        [this.mailExistsValidator],
        { updateOn: 'blur' }
      ],
      wealth: [this.person.wealth]
    });
  }

  private subscribeChanges() {
    this.personForm.valueChanges.subscribe(vals => {
      console.log('changes happening @form: ', vals);
    });
  }
>>>>>>> d461ad3d62053e1e339b99d6eecd6f5f48a0d668

	savePerson(personForm): void {
		this.ps.save(personForm);
	}

<<<<<<< HEAD
	//Sample for custom Validator
	validateName(control: FormControl): { [s: string]: boolean } {
		if (control.value === 'Hugo') {
			return { nameError: true };
		}
		return null;
	}
=======
  //Sample for custom Validator
  validateName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Hugo') {
      return { nameError: true };
    }
    return null;
  }
>>>>>>> d461ad3d62053e1e339b99d6eecd6f5f48a0d668

	violatesMinLenght() {
		let result = false;
		let errs: ValidationErrors = this.personForm.controls.name.errors;

<<<<<<< HEAD
		if (errs != null) {
			console.log('Errors in Name field: ', errs);
			if (errs['minlength']) {
				result = true;
			}
		}
		return result;
	}

	validateForm(form) {
		form.updateValueAndValidity();
		form.controls['name'].updateValueAndValidity();
	}
=======
    if (errs != null) {
      console.log('Errors in Name field: ', errs);
      if (errs['minlength']) {
        result = true;
      }
    }
    return result;
  }

  validateForm(form) {
    form.updateValueAndValidity();
    form.controls['name'].updateValueAndValidity();
  }
>>>>>>> d461ad3d62053e1e339b99d6eecd6f5f48a0d668
}
