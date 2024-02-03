import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationComponent } from '../../shared/navigation/navigation.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, NavigationComponent, FooterComponent],
  templateUrl: 'about-us.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AboutUsComponent {}
