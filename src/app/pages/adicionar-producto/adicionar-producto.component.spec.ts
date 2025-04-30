import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarProductoComponent } from './adicionar-producto.component';

describe('AdicionarProductoComponent', () => {
  let component: AdicionarProductoComponent;
  let fixture: ComponentFixture<AdicionarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
