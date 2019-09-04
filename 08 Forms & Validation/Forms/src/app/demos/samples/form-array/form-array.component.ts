import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, FormArray } from '@angular/forms'

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {
  form: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    if (this.form) {
      return
    }

    this.form = this.fb.group({
      name: 'Giro',
      skills: this.fb.array([this.fb.group({ skillname: 'Hunting', years: 9 })])
    })
  }

  get skills(): FormArray {
    return this.form.get('skills') as FormArray
  }

  addSkill() {
    this.skills.push(
      this.fb.group({
        skillname: '',
        years: ''
      })
    )
  }

  saveForm() {
    console.log('saving ...', this.form.value)
  }
}
