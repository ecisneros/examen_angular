import {Component, OnInit} from '@angular/core';
import {Modulo} from "../../../+dto/maintenance/modulo";
import {ModuloService} from "../../layout/navigation/http-modulo-service";
import {Observable} from "rxjs";
import {Response} from "@angular/http";


@Component({

  selector: 'sa-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {

  error = '';
  modulos: Array<Modulo> = [];
  private authenticatedUser: any;
  public errorMessage: string;

  constructor(private moduloService: ModuloService) {
      this.authenticatedUser = JSON.parse(sessionStorage.getItem("authenticatedUser") || '{}');
      this.modulos = JSON.parse(localStorage.getItem("modulos") || '{}');
  }

  ngOnInit() {

    

  }

}
