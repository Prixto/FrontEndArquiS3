import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detalle-nomina-modal',
  standalone: true,
  imports: [],
  templateUrl: './detalle-nomina-modal.component.html',
  styleUrl: './detalle-nomina-modal.component.css'
})
export class DetalleNominaModalComponent {
  constructor(
    public dialogRef: MatDialogRef<DetalleNominaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
