import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { iMunicipio } from './interfaces/municipio.interface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testingAngular';

  municipios: iMunicipio[] = [];

  form = new FormGroup({
    municipio: new FormControl(''),
    concatenar: new FormControl('')
  });

  resultados: string[] = [];

  constructor(private api: ApiService) {
      this.getMunicipios();
  }
  getMunicipios(){
    this.api.get().subscribe((resp:any)=>{
      this.municipios = resp;
    });
  }
  onSubmit(){
    
    let texto: string = this.setTexto(this.form.controls['municipio'].value,this.form.controls['concatenar'].value);
    
    this.resultados.push(texto);

    this.limpiar();
  }
  limpiar() {
    this.form.controls['municipio'].setValue('');
    this.form.controls['concatenar'].setValue('');
  }
  setTexto(municipio: string, contatenar:string): string {
    return `${municipio} ${contatenar}`;
  }
}
