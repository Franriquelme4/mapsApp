import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';
@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css']
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map') divMap?: ElementRef;
  mapReference?: Map;
  lngLat:LngLat = new LngLat(-57.406861,-25.371599)

  public currentZoom?: number = 10
  ngAfterViewInit(): void {
    if (!this.divMap) {
      return;
    }
    this.mapReference = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: this.currentZoom, // starting zoom
    });

    this.mapListeners();

  }


  ngOnDestroy(): void {
   this.mapReference?.remove()
  }

  mapListeners() {
    if (!this.mapReference) {
      return;
    }
    this.mapReference.on('zoom', (ev) => {
      this.currentZoom = this.mapReference?.getZoom();
      console.log(this.mapReference);


    })
    this.mapReference.on('zoomend', (ev) => {
      if (this.mapReference!.getZoom() < 18) {
        return
      }
      this.mapReference?.zoomTo(18);
    })
    this.mapReference.on('move',()=>{
      this.lngLat = this.mapReference?.getCenter()!;
    })


  }

  zoonIn() {
    this.mapReference?.zoomIn();
  }
  zoonOut() {
    this.mapReference?.zoomOut();
  }

  zoomInputChange(value:any){
    this.mapReference?.zoomTo(value);
  }


}
