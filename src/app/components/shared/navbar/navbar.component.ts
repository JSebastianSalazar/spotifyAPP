import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    navbarTitle = 'SpotiApp';
    navbarHome = 'Inicio';
    navbarSearch = 'Buscar';
    navbarActive = 'active';

  constructor() { }

  ngOnInit() {
  }

}
