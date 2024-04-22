import { Subject } from "rxjs";
import {
  Firestore,
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  DocumentData,
  CollectionReference,
  onSnapshot,
  QuerySnapshot,
  addDoc,
  getDoc,
  query,
  where,
  WhereFilterOp,
} from "firebase/firestore";
import { getStorage, ref, uploadString } from "firebase/storage";

import { getApp, initializeApp } from "firebase/app";
import { environment } from "src/environments/environment";

export class BaseService<T> {
  db: Firestore;

  collectionName: CollectionReference<DocumentData>;
  private updatedSnapshot = new Subject<QuerySnapshot<DocumentData>>();
  obsr_UpdatedSnapshot = this.updatedSnapshot.asObservable();

  constructor(protected path: string) {
    initializeApp(environment.firebase);
    this.db = getFirestore();
    this.collectionName = collection(this.db, path);

    // Get Realtime Data
    onSnapshot(
      this.collectionName,
      (snapshot) => {
        this.updatedSnapshot.next(snapshot);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  async getDbDocList() {
    const snapshot = await getDocs(this.collectionName);
    return snapshot;
  }

  async getDataList() {
    const snapshot = await this.getDbDocList();
    return this.updatecollectionNamelection(snapshot);
  }

  async getDataById(id: string) {
    try {
      let docSnap = getDoc(doc(this.db, `${this.path}/${id}`));
      let data = docSnap.then((el) => el.data());
      return data; //.data();
    } catch (e) {
      throw e;
    }
  }
  async getDataByKeyValue(key: string, value: string, operator: WhereFilterOp) {
    try {
      const q = query(this.collectionName, where(key, operator, value));

      let docSnap = await getDocs(q);
      let data = this.updatecollectionNamelection(docSnap);
      return data;
    } catch (e) {
      throw e;
    }
  }

  updatecollectionNamelection(snapshot: QuerySnapshot<DocumentData>) {
    let collectionNamelectiondata: any = [];
    snapshot.docs.forEach((record) => {
      collectionNamelectiondata.push({ ...record.data(), id: record.id });
    });

    console.log("collection list  --", collectionNamelectiondata);
    return collectionNamelectiondata;
  }

  async createRecord(data: any) {
    try {
      let _data = await addDoc(this.collectionName, {
        ...data,
        id: this.collectionName.id,
      });
      return { message: "record created successfully", data: _data };
    } catch (e) {
      throw e;
    }
  }

  async deleteRecord(docId: string) {
    try {
      const docRef = doc(this.db, this.path, docId);
      await deleteDoc(docRef);
      return { message: "record removed successfully" };
    } catch (e) {
      throw e;
    }
  }

  async updateRecord(docId: string, payload: any) {
    const docRef = doc(this.db, this.path, docId);
    const updatedData = await updateDoc(docRef, { ...payload });
    return { message: "record updated successfully", data: updatedData };
  }
}
