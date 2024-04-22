import { UtilService } from "./../utils/util.service";
import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  CountryISO,
  PhoneNumberFormat,
  SearchCountryField,
} from "ngx-intl-tel-input";
import { ContactUsService } from "../services/contact-us.service";
import { emailValidator } from "../utils/directives/email-validator.directive";

@Component({
  selector: "app-contact-us-form",
  templateUrl: "./contact-us-form.component.html",
  styleUrls: ["./contact-us-form.component.scss"],
})
export class ContactUsFormComponent {
  isLoading = false;
  countryName = CountryISO.India;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom,
    CountryISO.India,
  ];

  inquiryForm = new FormGroup({
    firstName: new FormControl("", [
      Validators.minLength(1),
      Validators.maxLength(250),
    ]),
    lastName: new FormControl("", [Validators.required]),
    email: new FormControl("", [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(250),
      emailValidator(),
    ]),
    // phoneNumber: new FormControl("", [Validators.required]),

    description: new FormControl("", [
      Validators.required,
      Validators.maxLength(1000),
    ]),
  });

  get first_name() {
    return this.inquiryForm.get("firstName")!;
  }

  get last_name() {
    return this.inquiryForm.get("lastName")!;
  }

  get email_id() {
    return this.inquiryForm.get("email")!;
  }
  get desc() {
    return this.inquiryForm.get("description")!;
  }

  constructor(
    private contactUsService: ContactUsService,
    private utilService: UtilService
  ) {}

  async sendInquiry(formValue: any, isValidForm: any) {
    try {
      this.isLoading = true;

      if (!isValidForm) {
        this.inquiryForm.markAllAsTouched();
        this.utilService.show(
          "Please provide all necessary information.",
          3000,
          "top"
        );
        console.log(formValue);
        return;
      }
      const createdInqData = await this.contactUsService.createInquiryRecord(
        formValue
      );
      if (createdInqData) {
        this.utilService.show(
          "Thanks for submitting your inquiry.",
          3000,
          "top"
        );

        console.log("inquiry created successfully ..", createdInqData);
        this.inquiryForm.reset();
      }

      console.log(formValue);
    } catch (e) {
      this.utilService.show(
        "OOps!! some error occured please try again later.",
        3000,
        "top"
      );
      console.log("error here ...", e);
    } finally {
      this.isLoading = false;
    }
  }
}
