import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPedidosComponent } from './components/list-pedidos/list-pedidos.component';
import { AddEditPedidoComponent } from './components/add-edit-pedido/add-edit-pedido.component';

const routes: Routes = [
  { path: "", component: ListPedidosComponent },
  { path: "add", component: AddEditPedidoComponent },
  { path: "edit/:id", component: AddEditPedidoComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
