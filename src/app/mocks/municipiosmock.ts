import { iMunicipio } from '../interfaces/municipio.interface';
export class MunicipiosMock  {
    getMock() {
        let municipiosMock: iMunicipio[] = [{
            c_digo_dane_del_departamento: 1,
            c_digo_dane_del_municipio: 21,
            departamento: 'nombre del departamento',
            municipio: 'nombre del municipio',
            region: 'region'
          }];
          return municipiosMock;
    }
    
}