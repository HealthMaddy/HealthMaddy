import { Injectable } from "@angular/core";
import { getApp } from "firebase/app";
import {
  getStorage,
  list,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";

@Injectable({
  providedIn: "root",
})
export class MediaService {
  firebaseApp;
  storage;
  storageRef: any;
  constructor() {
    this.firebaseApp = getApp();
    this.storage = getStorage(this.firebaseApp);
  }

  uploadFile(fileUrl: any, filePath: string, fileName: string) {
    const path = filePath + `/${new Date().getTime()}_${fileName}`;

    this.storageRef = ref(this.storage, path);
    const task = uploadString(this.storageRef, fileUrl, "data_url");
   

    return new Promise<any>((resolve, reject) => {
      task
        .then((snapshot) => {
          return Promise.all([snapshot, snapshot.ref.fullPath]);
        })
        .then(async (results) => {
          resolve(await this.getMediaUrl(results[1]));
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }

  toBase64 = (file: any) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  async getMediaUrl(imageFullPath: string) {
    let path = `${imageFullPath}`;

    const fileRef = ref(this.storage, path);
    const mediaUrl = await getDownloadURL(fileRef);
    return { url: mediaUrl };
  }
}
