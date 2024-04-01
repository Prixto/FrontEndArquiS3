import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detalle-empleado-modal',
  standalone: true,
  imports: [],
  templateUrl: './detalle-empleado-modal.component.html',
  styleUrl: './detalle-empleado-modal.component.css'
})
export class DetalleEmpleadoModalComponent {
  constructor(
    public dialogRef: MatDialogRef<DetalleEmpleadoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

}
