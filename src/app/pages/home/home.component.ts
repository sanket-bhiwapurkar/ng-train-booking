import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // State
  counter: number = 0
  isFive: boolean = false

  // Methods
  decrement() {
    this.counter === 0 ? 0 : this.counter--
    this.setIsFive()
  }
  increment() {
    this.counter === 10 ? 10 : this.counter++
    this.setIsFive()
  }
  setIsFive() {
    this.isFive = this.counter === 5
  }
}
