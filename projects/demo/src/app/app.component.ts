import { Component, OnInit } from '@angular/core';
import { Student } from 'foo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo';

  student:Student = {
    name: 'shehas',
    age:25
  }

  ngOnInit(): void {
      console.log(this.student)
  }

}
