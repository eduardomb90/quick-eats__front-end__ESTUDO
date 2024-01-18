import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isMenuDroped: boolean = false;
  public togglerActive: boolean = false;

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.isMenuDroped = !this.isMenuDroped;
    this.togglerActive = !this.togglerActive;
  }
}
