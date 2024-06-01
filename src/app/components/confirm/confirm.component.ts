import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  imports: [MatDialogModule],
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
  standalone: true,
})
export class ConfirmComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}
}
