import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "truncate" })
export class TruncatePipe implements PipeTransform {
  transform(value: string, words: number) {
    return value.split(" ").slice(0, words).join(" ") + "...";
  }
}
