import { UtilService } from "./../utils/util.service";
import { NewsletterService } from "./../services/newsletter.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent {
  constructor(
    private newsLetterService: NewsletterService,
    private utilService: UtilService
  ) {}
  email = "";
  model = {
    email: "",
  };

  isLoading: boolean = false;
  async onSubscribeNewsletter(newsLetterForm: any) {
    try {
      this.isLoading = true;
      const emailList =
        await this.newsLetterService.findEmailInNewsLetterListDb(
          newsLetterForm.value.email
        );

      if (emailList?.length) {
        this.utilService.show("Provided email is already used", 3000, "top");
        console.log("Provided email is already used ", emailList);
        return;
      }

      // console.log(newsLetterForm.value.email);
      const createdData = await this.newsLetterService.subscribeToNewsLetter(
        newsLetterForm.value.email
      );
      if (createdData) {
        this.utilService.show(
          "You've successfully subscribed to our newsletter 🥳",
          3000,
          "top"
        );
        console.log(`record created successfully`, createdData);
        newsLetterForm.form.reset();
      }
    } catch (e) {
      this.utilService.show(
        "OOps!! some error occured please try again later.",
        3000,
        "top"
      );
      console.log("error ..", e);
    } finally {
      this.isLoading = false;
    }
  }
}
