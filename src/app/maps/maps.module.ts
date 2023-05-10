import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreemPageComponent } from './pages/full-screem-page/full-screem-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPagesComponent } from './pages/properties-pages/properties-pages.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import { AppRoutingModule } from '../app-routing.module';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environments';
(mapboxgl as any).accessToken = environment.MAPBOX_KEY;


@NgModule({
  declarations: [
    MiniMapComponent,
    SideMenuComponent,
    MapsLayoutComponent,
    FullScreemPageComponent,
    MarkersPageComponent,
    PropertiesPagesComponent,
    ZoomRangePageComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }
