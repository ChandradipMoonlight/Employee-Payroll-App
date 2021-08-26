export class Employee {
  constructor(public id: number,
              public name: string,
              public imagePath: string,
              public gender: string,
              public salary: number,
              public startDate: Date,
              public department: string,
              public notes: string) {
  }
}
