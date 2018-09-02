import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test-task';

  isLoading = false;

  onLoading($event: boolean): void {
    this.isLoading = $event;
    console.log($event);
  }
}
