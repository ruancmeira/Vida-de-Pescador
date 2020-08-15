import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-perfil',
	templateUrl: './perfil.page.html',
	styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  	constructor(private authService: AuthService, private navCtrl: NavController) { }

  	ngOnInit(): void {
		if (!localStorage.getItem("PS:USER_INFO"))
			this.navCtrl.navigateRoot('/login');
	}

	logout(){
    	this.authService.logout();
	}
}
