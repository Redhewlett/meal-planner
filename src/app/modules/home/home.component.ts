import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from 'src/app/components/ui/section/section.component';
import { sections } from './section-data/sections';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public sections = sections;
}
