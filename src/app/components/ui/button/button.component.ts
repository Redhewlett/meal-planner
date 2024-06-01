import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

export type ButtonType = 'primary' | 'secondary' | 'tertiary';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({required: true}) text!: string;
  @Input() type: ButtonType = 'primary'
  @Input() disabled = false;
}
