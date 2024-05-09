import { Component } from "@angular/core";

@Component({
  selector: "app-countdown",
  templateUrl: "./countdown.component.html",
  styleUrls: ["./countdown.component.scss"],
})
export class CountdownComponent {
  constructor() {
    this.setCountdown();
  }
  // Get html elements
  day: number = 0;
  hour: number = 0;
  minute: number = 0;
  second: number = 0;

  setCountdown() {
    // Set countdown date
    let countdownDate = new Date("May 20, 2024 00:00:00").getTime();

    // Update countdown every second
    let updateCount = setInterval(() => {
      // Get today's date and time
      let todayDate = new Date().getTime();

      // Get distance between now and countdown date
      let distance = countdownDate - todayDate;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));

      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display values in html elements
      this.day = days;
      this.hour = hours;
      this.minute = minutes;
      this.second = seconds;

      // if countdown expires
      if (distance < 0) {
        clearInterval(updateCount);
       
      }
    }, 1000);
  }
}
