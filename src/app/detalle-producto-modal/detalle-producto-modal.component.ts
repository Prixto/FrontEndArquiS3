import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detalle-producto-modal',
  standalone: true,
  imports: [],
  templateUrl: './detalle-producto-modal.component.html',
  styleUrl: './detalle-producto-modal.component.css'
})
export class DetalleProductoModalComponent {

constructor(
  public dialogRef: MatDialogRef<DetalleProductoModalComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

}
