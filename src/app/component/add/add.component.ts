import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Employee } from '../../model/employee';
import { HttpService } from '../../service/http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public employee: Employee = new Employee;
  public employeeFormGroup: FormGroup;

  departments: Array<any> = [
    {
      name: "HR",
      value: "HR"
    },
    {
      name: "Sales",
      value: "Sales"
    },
    {
      name: "Finance",
      value: "Finance"
    },
    {
      name: "Engineer",
      value: "Engineer"
    },
    {
      name: "Other",
      value: "Other"
    }
  ]

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private router: Router,
    ) {
    this.employeeFormGroup = this.formBuilder.group({
      name: new FormControl(''),
      imagePath: new FormControl(''),
      gender: new FormControl(''),
      department: this.formBuilder.array([], [Validators.required]),
      salary: new FormControl(''),
      startDate: new FormControl(''),
      notes: new FormControl('') 
    })
   }

  ngOnInit(): void {
    console.log(this.employeeFormGroup);
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  onCheckboxChange(event: MatCheckboxChange) {
    const department: FormArray = this.employeeFormGroup.get('department') as FormArray;

    if (event.checked) {
      department.push(new FormControl(event.source.value));
    } else {
      const index = department.controls.findIndex(x => x.value === event.source.value);
      department.removeAt(index);
    }
  }

  salary: number = 400000;
  updateSetting(event: any) {
    this.salary = event.value;
  }

  onSubmit(): void {
    this.employee = this.employeeFormGroup.value;
    this.httpService.addEmployeeData(this.employee).subscribe(response=> {
      console.log(response);
      this.router.navigateByUrl("/home");
    });
  }

}