import { CampoGenerico } from './campoGenerico';

export interface ConfigParams {
  page?: number;
  limit?: number;
  pesquisa?: string;
  campo?:CampoGenerico;
}
