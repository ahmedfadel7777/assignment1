import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  id!: number;
  name!: string;

  users = [
    { userName: 'ahmed', age: 20, email: 'ahmed@gmail.com' },
    { userName: 'mohamed', age: 30, email: 'mohamed@gmail.com' },
    { userName: 'ali', age: 29, email: 'ali@gmail.com' },
    { userName: 'magdy', age: 25, email: 'magdy@gmail.com' },
    { userName: 'hossam', age: 28, email: 'hossam@gmail.com' },
    { userName: 'sabry', age: 15, email: 'sabry@gmail.com' },
  ]

  updateUserName() {
    if (this.id >0 && this.id !== undefined && this.id <= this.users.length) {
      this.users[this.id - 1].userName = this.name;
    }
  }

  clearInput(input: string) {
    if (input === 'name') {
      this.name = '';
    }
  }

}
