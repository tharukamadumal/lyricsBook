import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {Platform} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, public platform: Platform) {
    }
    
    openAmaradewa() {
        this.navCtrl.push('AmaradewaPage');
    }
    openAmarasiri() {
        this.navCtrl.push('AmarasiriPage');
    }
    openSunil() {
        this.navCtrl.push('SunilPage');
    }
    openTM() {
        this.navCtrl.push('TmPage');
    }
    openVictor() {
        this.navCtrl.push('VictorPage');
    }
    openEdward() {
        this.navCtrl.push('EdwardPage');
    }
    openDiwul() {
        this.navCtrl.push('DiwulPage');
    }
    openSanath(){
        this.navCtrl.push('SanathPage');
    }
    openNanda(){
        this.navCtrl.push('SanathPage');
    }
    openNirosha(){
        this.navCtrl.push('SanathPage');
    }
     openKasun(){
        this.navCtrl.push('SanathPage');
    }
     openChamara(){
        this.navCtrl.push('SanathPage');
    }
    openSashika(){
        this.navCtrl.push('SanathPage');
    }

    presentHelp() {
        const alert = this.alertCtrl.create({
            title: 'Help උදව් ',
            subTitle: 'ශ්‍රී ලාංකීය ගායක ගායිකාවන්ගේ සිංහල ගීත වල පද රචනයන් බලගැනීම හා එම ගීත ශ්‍රවනය කිරීමට මෙමෙ ඇප් එක මගින් පහසුකම් සලසා ඇත.\n\
            (සැ.යු:- ගීත ශ්‍රවනය කිරීම සඳහා ඔබගේ දුරකතනය අන්තර්ජාලය හා සම්බන්ද වී තිබිය යුතු වේ )',
            buttons: ['Dismiss']
        });
        alert.present();
    }

    exitApp() {
        this.platform.exitApp();
    }
}
