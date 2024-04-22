import { Injectable } from "@angular/core";
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class UtilService {
  constructor(private snackBar: MatSnackBar) {}

  /**
   * Show the snackbar
   *
   * @since 0.2.15
   */
//   show(message: string, duration: number = 3000) {
//     this.snackBar.open(message, "", {
//       duration: duration,
//       verticalPosition: "top",
//     });
//   }

  show(
    message: string,
    duration: number = 3000,
    position: MatSnackBarVerticalPosition = "bottom"
  ) {
    this.snackBar.open(message, "", {
      duration: duration,
      horizontalPosition: "center",
      verticalPosition: position,
    });
  }
}
