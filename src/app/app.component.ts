import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Birthday';
  showAnimation = false;
  show4KText = false;
  ballons = Array(20).fill(0);
  confettis = Array.from({length: 50}, () =>({
    left: Math.random() * 100 + 'vw',
    delay: Math.random() * 2 + 's',
    duration: Math.random() * 3 + 2 + 's'
  }));

  playAnimation() {
    this.showAnimation = true;

    const audio = new Audio('assets/page-64214.mp3');
    audio.play();
  }
  openGift() {
    this.show4KText = true;
  }
  getRandomPosition(){
    return Math.floor(Math.random() * window.innerWidth);
  }
  genRandom(){
    return Math.random();
  }
}
