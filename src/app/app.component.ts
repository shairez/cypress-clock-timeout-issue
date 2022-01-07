import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products$ = this.appService.products$;
  showExcitedMessage = false;

  constructor(private appService: AppService) {
    
  }
  title = 'angular13';

  async fetchProducts() {
    await this.appService.fetchProducts();
    this.showExcitedMessage = true;

    setTimeout(() => {
      this.showExcitedMessage = false;
    }, 5000);
  }


}
