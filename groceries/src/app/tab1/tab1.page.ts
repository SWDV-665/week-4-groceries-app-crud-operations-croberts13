import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServicesService } from '../groceries.service';
import { InputDialogService } from '../input-dialog.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  

  constructor(
    public toastCtrl: ToastController,
    public alertController: AlertController,
    public dataService: GroceriesServicesService,
    public inputDialogService: InputDialogService
  ) {}


  loadItems() {
  return this.dataService.getItems();
}
addItem() {
  console.log('Adding Item to List...');
  this.inputDialogService.presentAlert();
}

/*the Edit Grocery Item*/
async editItem(n, index) {
  console.log('Edit Item: ', n, index);
  const toast = this.toastCtrl.create({
    message: 'Updating Item to List: ' + n.itemName,
    duration: 3000
  });
  (await toast).present();
  this.inputDialogService.presentAlert(n, index);
}

/*the Remove Grocery Item*/
async removeItem(n, index) {
  console.log('Remove This Item: ', n, index);
  const toast = this.toastCtrl.create({
    message: 'Deleting Item - ' + n.itemName + ' ...',
    duration: 3000
});
  (await toast).present();
  this.dataService.removeItem(index);
}
}
