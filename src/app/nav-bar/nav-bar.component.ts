import { Component, OnInit } from '@angular/core';
import {StateService} from '../state.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public State:StateService) { }

  ngOnInit(): void {
  const menu = document.querySelector('#mobile-menu');
  const menuLinks = document.querySelector('.nav-menu');

  menu.addEventListener('click', function() {
      menu.classList.toggle('is-active');
      menuLinks.classList.toggle('active')
    })
  }

  showAddStreamModal() {
    this.State.showAddStreamModal = true;
  }

}
