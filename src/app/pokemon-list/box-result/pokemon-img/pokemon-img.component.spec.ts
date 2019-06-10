import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonImgComponent } from './pokemon-img.component';

describe('PokemonImgComponent', () => {
  let component: PokemonImgComponent;
  let fixture: ComponentFixture<PokemonImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
