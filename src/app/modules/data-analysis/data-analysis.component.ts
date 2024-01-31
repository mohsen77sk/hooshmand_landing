import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationComponent } from '../../shared/navigation/navigation.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-data-analysis',
  standalone: true,
  imports: [CommonModule, NavigationComponent, FooterComponent],
  templateUrl: './data-analysis.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class DataAnalysisComponent {
  list: { title: string; desc: string; isOpen: boolean }[] = [
    {
      title: 'محصول شما چه خدماتی ارائه می‌دهد؟',
      desc: 'توضیحات',
      isOpen: false,
    },
    {
      title: 'چگونه می‌توانم با تیم پشتیبانی تماس بگیرم؟',
      desc: 'توضیحات',
      isOpen: false,
    },
    {
      title:
        'چگونه می‌توانم از این محصول برای بهبود عملکرد سرمایه‌گذاری خود استفاده کنم؟',
      desc: 'توضیحات',
      isOpen: false,
    },
    {
      title: 'آیا امکان همکاری با دیگر کاربران در این محصول وجود دارد؟',
      desc: 'توضیحات',
      isOpen: false,
    },
    {
      title: 'آیا می‌توانم از این محصول برای مدیریت ریسک استفاده کنم؟',
      desc: 'توضیحات',
      isOpen: false,
    },
    {
      title: 'آیا محصول شما با قوانین و مقررات مالی سازگار است؟',
      desc: 'توضیحات',
      isOpen: false,
    },
    {
      title:
        'آیا می‌توانم از این محصول برای تجزیه و تحلیل عملکرد بازار استفاده کنم؟',
      desc: 'توضیحات',
      isOpen: false,
    },
    {
      title: 'آیا محصول شما قابلیت تحلیل داده‌های بازار در زمان واقعی دارد؟',
      desc: 'توضیحات',
      isOpen: false,
    },
    {
      title: 'چگونه می‌توانم از امکانات تجزیه و تحلیل پیشرفته استفاده کنم؟',
      desc: 'توضیحات',
      isOpen: false,
    },
    {
      title: 'چگونه می‌توانم داده‌های مالی را در محصول شما وارد کنم؟',
      desc: 'توضیحات',
      isOpen: false,
    },
  ];
}
