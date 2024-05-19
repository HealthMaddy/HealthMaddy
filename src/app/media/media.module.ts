import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MediaComponent } from "./media.component";
import { MediaService } from "./media.service";

@NgModule({
  declarations: [MediaComponent],
  imports: [CommonModule],
  providers: [MediaService],
  exports: [MediaComponent],
})
export class MediaModule {}
