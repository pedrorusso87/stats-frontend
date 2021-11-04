import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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
