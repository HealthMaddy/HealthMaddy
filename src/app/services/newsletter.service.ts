import { NewsLetter } from "./../core/Interfaces/newsletter.interface";
import { BaseService } from "./../core/api-firebase/base.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class NewsletterService extends BaseService<NewsLetter> {
  constructor() {
    super("NewsLetterSubscriptions");
  }

  async subscribeToNewsLetter(email: string) {
    if (!email) throw new Error("please pass a valid email to subscribe");
    return await this.createRecord({ email });
  }

  async findEmailInNewsLetterListDb(email: string) {
    if (!email) return;

    return await this.getDataByKeyValue("email", email, '==');
  }
}
