import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Employee } from '../../model/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public employeeCount: Number = 10;

  public employeeDetails: Employee[] = [];
  constructor(private httpService: HttpService,
              private router: Router) { }

  ngOnInit(): void {
    this.httpService.getEmployeeData().subscribe(Response=>{
      this.employeeDetails = Response.data;
      this.employeeCount = this.employeeDetails.length;
      console.log(this.employeeDetails);
    });
  }

  remove(id: number) {
    this.httpService.deleteEmployeeData(id).subscribe(data=> {
      console.log(data);
      this.ngOnInit();      
    });
  }

  update(id : number) {
    this.router.navigateByUrl('/add');
    // this.employeeDetails.entries();
    this.httpService.updateEmployeeData(id, this.employeeDetails).subscribe(data=> {
      console.log(data);    
    });
  }

}
