import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  ModalController,
  NavParams
} from '@ionic/angular';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.scss'],
})
export class FormPostComponent implements OnInit {


  modalTitle: string;
  modelId: number;
  insertPostForm: FormGroup;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  insertPost() {
    console.log('teste', this.insertPostForm.value);
  }

}