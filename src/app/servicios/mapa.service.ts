import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemNegocioDTO } from '../dto/ItemNegocioDTO';

declare var mapboxgl: any;

@Injectable({
  providedIn: 'root',
})
export class MapaService {
  mapa: any;
  style: string = 'mapbox://styles/mapbox/streets-v11';
  directions: any;
  marcadores: any[];

  constructor() {

    if( typeof mapboxgl == "object" ){
      mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsYWdvbnphbGV6IiwiYSI6ImNsdnUxYXkwNDFjdzQya3A2enBleXZtamcifQ.v0G6NF6IGcg-J_b7Lh6E4g';
    }
    this.marcadores = [];
  }

  public crearMapa() {


    if( typeof mapboxgl == "object" ){

      this.mapa = new mapboxgl.Map({
        container: 'mapa',
        style: this.style,
        center: [-72.309, 4.473],
        zoom: 4.5,
      });
      this.mapa.addControl(new mapboxgl.NavigationControl());
      this.mapa.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: { enableHighAccuracy: true },
          trackUserLocation: true,
        })
      );
    }
  }

  public agregarMarcador(): Observable<any> {
    console.log("Ingresa marcador");
    const mapaGlobal = this.mapa;
    const marcadores = this.marcadores;
    return new Observable<any>((observer) => {
      mapaGlobal.on('click', function (e: any) {
        marcadores.forEach((marcador) => marcador.remove());
        const marcador = new mapboxgl.Marker()
          .setLngLat([e.lngLat.lng, e.lngLat.lat])
          .addTo(mapaGlobal);
        marcadores.push(marcador);
        console.log(marcador);
        observer.next(marcador._lngLat);
      });
    });
  }

  public pintarMarcadores(negocios: ItemNegocioDTO[]) {
    console.log("pintar");
    negocios.forEach((negocio) => {
      new mapboxgl.Marker()
        .setLngLat([negocio.ubicacion.longitud, negocio.ubicacion.latitud])
        .setPopup(new mapboxgl.Popup().setHTML(negocio.nombre))
        .addTo(this.mapa);
    });
  }




}
