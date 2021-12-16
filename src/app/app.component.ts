import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-form';

  empDetails = null as any;
  
  constructor(private employeeService: EmployeeService)
  {
    this.getEmployeeDetails();

  }
  register(registerForm: NgForm)
  {
    this.employeeService.registerEmployee(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        alert("Thank you, Application submitted successfully");
        this.getEmployeeDetails();

      },
      (err) => {
        console.log(err);
      }
    );
  }

  getEmployeeDetails(){
    this.employeeService.getEmployee().subscribe(
      (resp) => {
        console.log(resp);
        this.empDetails = resp;
      },
      (err) =>{
        console.log(err);
      }
    );
  }
}
