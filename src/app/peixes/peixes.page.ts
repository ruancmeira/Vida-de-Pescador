import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-peixes',
  templateUrl: './peixes.page.html',
  styleUrls: ['./peixes.page.scss'],
})
export class PeixesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit(): void {
    if (!localStorage.getItem("PS:USER_INFO"))
        this.navCtrl.navigateRoot('/login');
  }

}
