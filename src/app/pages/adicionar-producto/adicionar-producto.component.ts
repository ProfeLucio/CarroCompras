import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../modelos/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-adicionar-producto',
  imports: [ReactiveFormsModule],
  templateUrl: './adicionar-producto.component.html',
  styleUrl: './adicionar-producto.component.sass'
})
export class AdicionarProductoComponent implements OnInit {
  public product!: Product;
  productForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    category: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    stock: new FormControl(''),    
  });
  constructor(public productServ: ProductService){}
  ngOnInit() {
  
    
  }

  onSave(){    
    this.productServ.create(this.productForm.value).subscribe((res: any)=>{
      console.log(res);
    })
  }
}
