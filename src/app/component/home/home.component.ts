import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public employeeCount: Number = 10;

  public employeeDetails: Employee[] = [];
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getEmployeeData().subscribe(Response=>{
      this.employeeDetails = Response.data;
      this.employeeCount = this.employeeDetails.length;
      console.log(this.employeeDetails);
    });
  }

}
