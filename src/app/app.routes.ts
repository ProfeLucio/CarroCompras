import { Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { AdicionarProductoComponent } from './pages/adicionar-producto/adicionar-producto.component';

export const routes: Routes = [
    { 
        path: '', 
        component: ProductosComponent
    },
    { 
        path: 'adicionar-producto', 
        component: AdicionarProductoComponent
    }
];
