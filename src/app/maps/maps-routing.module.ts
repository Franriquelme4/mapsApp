import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreemPageComponent } from './pages/full-screem-page/full-screem-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPagesComponent } from './pages/properties-pages/properties-pages.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

const routes: Routes = [
  {
    path: '', component: MapsLayoutComponent,
    children: [
      { path: 'fullScrem', component: FullScreemPageComponent },
      { path: 'markers', component: MarkersPageComponent },
      { path: 'properties', component: PropertiesPagesComponent },
      { path: 'zoom-range', component: ZoomRangePageComponent },
      { path: '**', redirectTo: 'fullScrem' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
