import { Component } from "@angular/core";

@Component({
  selector: "app-footer-section",
  templateUrl: "./footer-section.component.html",
  styleUrls: ["./footer-section.component.scss"],
})
export class FooterSectionComponent {
  socialMediaHandles = {
    instagram: "https://www.instagram.com/health.maddy",
    twitter: "https://x.com/HEALTH_MADDY",
    facebook: "https://www.facebook.com/profile.php?id=61558385673477",
  };
}
