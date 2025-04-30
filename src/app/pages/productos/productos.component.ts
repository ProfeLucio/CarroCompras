import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../modelos/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos',
  imports: [RouterLink],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.sass'
})
export class ProductosComponent implements OnInit {
  public productos: Product[] = []
  constructor(
    public productSer: ProductService
  ){}
  ngOnInit(): void {
    this.productSer.getAll().subscribe((res: any)=>{
      console.log(res.products);
      this.productos = res.products;
    })
    
  }

}
