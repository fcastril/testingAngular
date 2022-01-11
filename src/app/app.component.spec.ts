import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { iMunicipio } from './interfaces/municipio.interface';
import { MunicipiosMock } from './mocks/municipiosmock';


describe('AppComponent', () => {

   let apiService: ApiService;
   let component: AppComponent;
   let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        ApiService
      ]
    }).compileComponents();
    apiService = TestBed.inject(ApiService);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('Verificar la concatenación del Texto', ()=>{
    let textoContatenado = component.setTexto('Medellín','Capital de la Montaña');

    expect( textoContatenado ).toBe('Medellín Capital de la Montaña');

  });

  it('Verificar Sumatoria de números', ()=>{
    let numeroSumado = component.setCalcularSuma(10,20);

    expect( numeroSumado ).toBe(30);
  });
  it('Verificar Multiplicación de números', ()=>{
    let numeroSumado = component.setCalcularSuma(20,10);

    expect( numeroSumado ).toBe(200);
  });

  it('Limpiar Formulario', ()=>{
    component.limpiar();
    expect ( component.form.controls['municipio'].value ).toEqual('');
    expect ( component.form.controls['concatenar'].value ).toEqual('');
  });
  
  it('Verificar SUBMIT', ()=>{
    component.form.controls['municipio'].setValue('Medellín');
    component.form.controls['concatenar'].setValue('La tasita de plata');

    component.onSubmit();

    expect( component.resultados.length ).toBeGreaterThan(0);
  });

  
  it('Verificar Servicio GET',()=>{

    let mMock = new MunicipiosMock();

    let municipiosMock = mMock.getMock();

    spyOn(apiService,'get').and.callFake(()=>{

      return of([municipiosMock])
    });

    component.getMunicipios();
    
    expect(component.municipios).toBeDefined();


  });

});
