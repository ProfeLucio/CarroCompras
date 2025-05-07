import { Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { AdicionarProductoComponent } from './pages/adicionar-producto/adicionar-producto.component';
import { ProductoComponent } from './pages/producto/producto.component';

export const routes: Routes = [
    { 
        path: '', 
        component: ProductosComponent
    },
    { 
        path: 'adicionar-producto', 
        component: AdicionarProductoComponent
    },
    { 
        path: 'ver-producto/:id', 
        component: ProductoComponent
    }
];
