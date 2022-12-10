import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  title = 'Grocery List';
  handlerMessage = '';
  roleMessage = '';
  

  constructor(
    public toastCtrl: ToastController,
    public alertController: AlertController
  ) {}

  async removeItem(item, index) {
    console.log('Removing Item -', item, index);
    const toast = this.toastCtrl.create({
      message: 'Removing Item -' + index + '...',
      duration: 3000,
    });
    await toast.then(()=>console.log('completed'));

    // toast.present().then(() => {
    // });
  }

  async editItem(item, index) {
    console.log('Editing Item -', item, index);
    const toast = this.toastCtrl.create({
      message: 'Edit Item -' + index + '...',
      duration: 3000,
    });
    await toast.then(()=>console.log('completed'));
    // toast.present().then(() => {
    // });
    this.showEditItem(item, index);
  }

  async addItem() {
    console.log('Adding Item');
    const alert = await this.alertController.create({
      header: 'Please enter Grocery Item',
      buttons: [
        {
          text: 'Save',
          role: 'save',
          handler: (data) => {
            this.items.push({
              name: data.name,
              quantity: data.quantity,
            });
          },
        },
      ],

      inputs: [
        {
          placeholder: 'Item',
          name: 'name',
        },
        {
          placeholder: 'quantity',
          name: 'quantity',
        },
      ],
    });
    await alert.present();
  }

  
  async showEditItem(item,index) {
    console.log('Editing Item');
    const alert = await this.alertController.create({
      header: 'Please edit Grocery Item',
      buttons: [
        {
          text: 'Save',
          role: 'save',
          handler: (data) => {
            this.items[index] = item({
              name: data.name,
              quantity: data.quantity,
            });
          },
        },
      ],

      inputs: [
        {
          placeholder: 'Item',
          name: 'name',
        },
        {
          placeholder: 'quantity',
          name: 'quantity',
        },
      ],
    });
    await alert.present();
  }

  async presentAlert() {}
}
