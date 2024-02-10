import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserveElementDirective } from 'src/app/directives/observe-element.directive';
@Component({
  selector: 'app-section',
  standalone: true,
  imports: [ObserveElementDirective, CommonModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
})
export class SectionComponent {
  @Input({ required: true }) sectionTitle!: string;
  @Input() sectionSubtitle: string | undefined;
  @Input({ required: true }) sectionImage!: string;
  @Input() sectionDirection?: 'left' | 'right';
  @Input() index!: number;
}
