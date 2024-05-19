import { Inquiry } from "./../core/Interfaces/inquiries.interface";
import { Injectable } from "@angular/core";
import { BaseService } from "../core/api-firebase/base.service";

@Injectable({
  providedIn: "root",
})
export class ContactUsService extends BaseService<Inquiry> {
  constructor() {
    super("Inquiries");
  }

  async createInquiryRecord(body: Inquiry) {
    return await this.createRecord(body);
  }
}
