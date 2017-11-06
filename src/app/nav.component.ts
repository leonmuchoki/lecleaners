import { Component } from '@angular/core';

@Component({
  selector: 'nav-header',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
  title = 'i need a ... i need a ... to be ..';

  isIn = false;   // store state
  toggleState() { // click handler
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }
}
