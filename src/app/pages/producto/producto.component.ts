import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../modelos/product';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.sass'
})
export class ProductoComponent  implements OnInit{
  public id: string = ''
  public prod!: Product
  constructor(
    public route: ActivatedRoute,
    public productServ: ProductService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.productServ.getId(this.id).subscribe((res: any)=>{
      this.prod = res;
      console.log(res)
    });

  }

}
