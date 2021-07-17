import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigParams } from './../shared/models/configParams';
@Injectable({
  providedIn: 'root'
})
export class ConfigParamsService {
  constructor() {}

  configurarParametros(config: ConfigParams): HttpParams {
    let httpParams = new HttpParams();

    if (config.page) {
      httpParams = httpParams.set('_page', config.page.toString());
    }

    if (config.limit) {
      httpParams = httpParams.set('_limit', config.limit.toString());
    }

    if (config.pesquisa) {
      httpParams = httpParams.set('q', config.pesquisa)
    }

    if (config.campo) {
      httpParams = httpParams.set(config.campo.tipo, config.campo.valor);
    }

    httpParams = httpParams.set('_sort', 'id');
    httpParams = httpParams.set('_order', 'desc');

    return httpParams;
  }
}
