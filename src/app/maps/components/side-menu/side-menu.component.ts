import { Component } from '@angular/core';

interface MenuItem {
  name: string,
  route: string
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  public menuItem:MenuItem[] = [
    { route: '/maps/fullScrem', name: "Full Screem" },
    { route: '/maps/markers', name: 'Markers' },
    { route: '/maps/properties', name: 'Properties' },
    { route: '/maps/zoom-range', name: 'Zoom Range' }
  ]

}
