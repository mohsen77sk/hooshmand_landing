import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationComponent } from '../../shared/navigation/navigation.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-open-banking',
  standalone: true,
  imports: [CommonModule, NavigationComponent, FooterComponent],
  templateUrl: './open-banking.component.html',
  styleUrl: './open-banking.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class OpenBankingComponent {
  performance = 4;
}
