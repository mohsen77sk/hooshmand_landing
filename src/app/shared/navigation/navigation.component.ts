import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class NavigationComponent {
  @Input() theme: 'light' | 'dark' = 'light';
}
