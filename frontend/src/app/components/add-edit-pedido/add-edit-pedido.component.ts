import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pedido } from 'src/app/interfaces/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-add-edit-pedido',
  templateUrl: './add-edit-pedido.component.html',
  styleUrls: ['./add-edit-pedido.component.css']
})
export class AddEditPedidoComponent implements OnInit {
  form: FormGroup
  loading: boolean = false
  id: number
  operacion: string = 'Agregar '
  constructor(private fb: FormBuilder,
    private _pedidoService: PedidoService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute) {
    this.form = this.fb.group({
      titulo: ["", Validators.required],
      descripcion: ["", Validators.required],
    })
    this.id = Number(route.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
    if (this.id != 0) {
      this.operacion = 'Editar '
      this.getPedido(this.id)

    }
  }

  getPedido(id: number) {
    this.loading = true
    this._pedidoService.getPedido(id).subscribe((data: Pedido) => {
      this.loading = false
      this.form.setValue({
        titulo: data.titulo,
        descripcion: data.descripcion,
      })
    })
  }

  addProduct() {
    const pedido: Pedido = {
      titulo: this.form.value.titulo,
      descripcion: this.form.value.descripcion,

    }
    this.loading = true
    if (this.id != 0) {
      // Editar
      this._pedidoService.updatePedido(pedido, this.id).subscribe(() => {
        this.loading = false
        this.toastr.info(`El pedido ${pedido.titulo} fue Editado con exito`, 'pedido Editado')
        this.router.navigate(['/'])
      })
    } else {
      //Agregar
      this._pedidoService.postProduct(product).subscribe(() => {

        this.loading = false
        this.toastr.success(`El producto ${product.name} fue registrado con exito`, 'Producto registrado')
        this.router.navigate(['/'])
      })
    }
  }

}
