import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationComponent } from '../../shared/navigation/navigation.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-data-analysis',
  standalone: true,
  imports: [CommonModule, NavigationComponent, FooterComponent],
  templateUrl: './data-analysis.component.html',
  styleUrl: './data-analysis.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DataAnalysisComponent {}
