import { MediaService } from "./media.service";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-media",
  templateUrl: "./media.component.html",
  styleUrls: ["./media.component.scss"],
})
export class MediaComponent implements OnInit {
  @Input("filePath") filePath: string = "default";
  constructor(private readonly mediaService: MediaService) {}

  ngOnInit(): void {
    // this.mediaService
    //   .getMediaUrl("Product/1713529920719_myProfile.jpeg")
    //   .then((res) => {
    //     console.log("media res--- for list ---", res);
    //   });
  }

  selectedFile: any;
  avatarURL: any;

  mediaList: { type: string; url: string; id: string }[] = [];

  /* for all files  */
  async onFileSelect(event: any) {
    const file = event.target.files[0];
    const mediaRes = await this.uploadFileInStorage(file);
    this.avatarURL = mediaRes?.image?.url;
  }

  /* for images only  */
  async changeAvatar(files: any) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      console.log("Only images are supported.");
      return;
    }

    const mediaRes = await this.uploadFileInStorage(files[0]);
    this.avatarURL = mediaRes?.image?.url;

    this.mediaList.push({
      type: !this.mediaList?.length ? "primary" : "secondary",
      url: this.avatarURL,
      id: "",
    });

    console.log("media url list --", this.mediaList);
  }

  async uploadFileInStorage(file: any) {
    let base64file: any = await this.mediaService.toBase64(file);

    let img = await this.mediaService.uploadFile(
      base64file,
      this.filePath,
      file.name
    );

    return { file: base64file, image: img, path: this.filePath };
  }
}
