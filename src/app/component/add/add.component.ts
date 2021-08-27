import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  employeeData: Employee;

  constructor(private httpService: HttpService,
    private router: Router) { }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  ngOnInit(): void {
  }
    
    submit() {
      this.httpService.addEmployeeData(this.employeeData).subscribe(Response=>{
        console.log(Response);
        this.router.navigateByUrl("/home");
      });
    }
}
