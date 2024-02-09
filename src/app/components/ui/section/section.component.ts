import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
  @Input({required : true}) sectionTitle!: string;
  @Input() sectionSubtitle: string | undefined;
  @Input({required:true}) sectionImage!: string;
  @Input() sectionDirection?: 'left' | 'right';
}
