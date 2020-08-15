import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService }  from './../services/api.service';

import { ModalController } from '@ionic/angular';
import { FormPostComponent } from '../components/form-post/form-post.component';
//import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  postsData: any;
  token: any;
  storage: any;

  constructor(
    public apiService: ApiService, 
    private navCtrl: NavController,
    public modalController: ModalController
    ) {
    
    if (localStorage.getItem("PS:USER_INFO")) {
      this.storage = JSON.parse(localStorage.getItem("PS:USER_INFO"));
      this.token = this.storage.token;
    }

    this.postsData = [];
  }

  ngOnInit(): void {
    if (!localStorage.getItem("PS:USER_INFO"))
        this.navCtrl.navigateRoot('/login');
  }

  ionViewWillEnter(){
    this.getAllPosts();
  }

  getAllPosts() {

    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.postsData = response;
    })
    
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: FormPostComponent,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        //this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

}
