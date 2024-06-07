import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Pedido } from 'src/app/interfaces/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-list-pedidos',
  templateUrl: './list-pedidos.component.html',
  styleUrls: ['./list-pedidos.component.css']
})
export class ListPedidosComponent implements OnInit {
  listPedidos: Pedido[] = []
  loading: boolean = false
  constructor(private _pedidoService: PedidoService, private toastr: ToastrService) { }


  ngOnInit(): void {
    this.getListPedidos()
  }
  getListPedidos() {
    this.loading = true

    this._pedidoService.getListPedidos().subscribe((data) => {
      this.listPedidos = data
    })
    this.loading = false
  }

  deletePedido(id: number) {
    this.loading = true
    this._pedidoService.deletePedido(id).subscribe(() => {
      this.getListPedidos()
      this.toastr.warning('El Pedido fue Entregado con exito', 'Pedido Entregado')
    })
  }
}
