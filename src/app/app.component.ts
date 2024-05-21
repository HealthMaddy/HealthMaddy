import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Meta } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private metaService: Meta) {}

  ngOnInit(): void {
    this.metaService.addTags([
      {
        name: "keywords",
        content: `Health Maddy, HEALTH MADDY , health maddy ,health, maddy, maddy health ,   best ,  pre workout , spell pre workout , onlone fitness classes ,  protein , best protein ,  fat loss, muscle gain , lean , gain , muscule, power , pump , amino acids , for weight loss , at home  , Best pre workout meal,
        Best Pre workout in India,
        Best pre workout at home,
        Best pre workout natural,
        Best Pre workout for men,
        Top 10 Pre workout supplement,
        Muscle gain best Pre workout,
        Best Pre workout under 1000,
        Whey protein , Oats , peanut butter, genuine , authentic products, 
`,
      },
      { name: "author", content: "Raunak Srivastava, Abhishek Srivastava" },
      { name: "robots", content: "index, home" },

      { charset: "UTF-8" },
    ]);
  }
}
