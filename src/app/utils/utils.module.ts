import { EmailValidatorDirective } from './directives/email-validator.directive';
import { TruncatePipe } from "./pipes/truncate-string.pipe";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UtilService } from './util.service';
import { SkeletonComponent } from './skeleton/skeleton.component';

@NgModule({
  declarations: [TruncatePipe,EmailValidatorDirective, SkeletonComponent],
  imports: [CommonModule],
  providers: [UtilService],
  exports: [TruncatePipe,SkeletonComponent],
})
export class UtilsModule {}
