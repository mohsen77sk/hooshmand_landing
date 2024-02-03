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

  navigation: Array<{
    name: string;
    link?: string;
    children?: { name: string; link: string }[];
  }> = [
    { name: 'صفحه اصلی', link: '/home' },
    {
      name: 'خدمات و محصولات',
      children: [
        { name: 'خدمات بانکداری باز', link: '/open-banking' },
        { name: 'خدمات پرداخت یاری', link: '/assistance-payment' },
        { name: 'پردازش داده ها', link: '/data-analysis' },
      ],
    },
    { name: 'ارتباط با ما', link: '/contact-us' },
    { name: 'درباره ما', link: '/about-us' },
  ];

  toggleNavigation(): void {
    const backdrop = document.getElementById('drawer-backdrop');
    backdrop?.classList.toggle('hidden');
  }
}
