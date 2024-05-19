import { NgModule } from "@angular/core";
import { firebaseApp$, provideFirebaseApp } from "@angular/fire/app";
// import { AngularFireModule } from "@angular/fire/compat";
// import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { provideFirestore } from "@angular/fire/firestore";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { NgxIntlTelInputModule } from "ngx-intl-tel-input";
import { environment } from "src/environments/environment";
import { BaseService } from "./api-firebase/base.service";

@NgModule({
  imports: [
    // provideFirebaseApp(
    //   () => initializeApp(environment.firebase, "health maddy web app"),
    //   firebaseApp$
    // ),
    // provideFirestore(() => getFirestore()),
    FormsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule

  ],
  exports: [NgxIntlTelInputModule,ReactiveFormsModule ],
  providers: [],
})
export class CoreModule {}
