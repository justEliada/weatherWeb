import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  constructor() { }

  ngOnInit(): void {
  }

  //search
  search(){
    console.log("searching");
  }

}
