import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { CommonModule } from '@angular/common';  // Import CommonModule


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('2s ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent {
  name = "Your Name"; // Replace with your name

}
