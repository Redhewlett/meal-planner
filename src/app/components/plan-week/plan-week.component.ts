import { Component } from '@angular/core';
import { WeekService } from 'src/app/services/week.service';

@Component({
  selector: 'app-plan-week',
  templateUrl: './plan-week.component.html',
  styleUrls: ['./plan-week.component.scss'],
})
export class PlanWeekComponent {
  constructor(public weekService: WeekService) {}
}
