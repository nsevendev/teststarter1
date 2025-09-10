import {Component, computed, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');

  changeTitle() {
    this.title.set("mon nouveau titre" );
  }

  readonly t = computed(() => {
    console.log('calcule de t');
    return this.title() + ' ' + new Date().toLocaleTimeString();
  })
}
