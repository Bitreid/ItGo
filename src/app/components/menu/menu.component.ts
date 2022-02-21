import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
// Добавили "HostBinding" - докоратор

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {


  @HostBinding('class')
  hostClass = 'hidden';
  private skipClick = false;
  constructor() { }

  ngOnInit(): void {
  }

@HostListener('click', ["$event"])
  hostClik(event: Event) {
    console.log('click', event);
    event.stopPropagation()
  }

  @HostListener('window:click', ["$event"])
    windowClik(event: Event) {
      console.log('window click', event);
    }



  show() {
    this.hostClass = ''
    this.skipClick = true;
  }
    @HostListener('window:click')
  hide() {
    if (this.skipClick) {
      this.skipClick = false;
      return;
    }
    this.hostClass = 'hidden';
  }
}
