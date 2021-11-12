import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Moment} from "moment";
import * as moment from "moment";

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  registerTeamForm: FormGroup;
  teamName = new FormControl('', Validators.compose([Validators.required, Validators.maxLength(30)]));
  teamOwner = new FormControl('', Validators.required);
  foundationYear = new FormControl('', Validators.required)
  maxDate: any

  constructor(
    private fb: FormBuilder
  ) {
    this.registerTeamForm = this.fb.group({
      teamName: this.teamName,
      teamOwner: this.teamOwner,
      foundationYear: this.foundationYear
    })
  }

  ngOnInit(): void {
    this.maxDate = new Date()
    console.log(this.maxDate)
  }

  onSubmit(): void {
    this.validateForm();
  }

  validateForm(): void {
    if (this.registerTeamForm.valid) {
    }
  }

  getTeamName(): any {
    return this.registerTeamForm.get('teamName')?.value;
  }

  getTeamOwner(): any {
    return this.registerTeamForm.get('teamOwner')?.value;
  }

  getFoundationYear(): any {
    return this.registerTeamForm.get('foundationYear')?.value;
  }

}
