import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AudioProvider} from 'ionic-audio';

/**
 * Generated class for the SunilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-sunil',
    templateUrl: 'sunil.html',
})
export class SunilPage {

    myTracks: any[];
    myTracks2: any[];
    myTracks3: any[];
    myTracks4: any[];
    myTracks5: any[];
    myTracks6: any[];
    myTracks7: any[];
    myTracks8: any[];
    myTracks9: any[];
    myTracks10: any[];
    myTracks11: any[];
    myTracks12: any[];
    myTracks13: any[];
    allTracks: any[];
    selectedTrack: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private _audioProvider: AudioProvider) {
    }

    ngAfterContentInit() {
        // get all tracks managed by AudioProvider so we can control playback via the API
        this.allTracks = this._audioProvider.tracks;
    }

    playSelectedTrack() {
        // use AudioProvider to control selected track 
        this._audioProvider.play(this.selectedTrack);
    }

    pauseSelectedTrack() {
        // use AudioProvider to control selected track 
        this._audioProvider.pause(this.selectedTrack);
    }

    onTrackFinished(track: any) {
        console.log('Track finished', track)
    }

    amalbiso() {
        this.myTracks = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Mage%20Amal%20Biso%20Dora%20%20%20%20%20__Sunil%20Eadirisinghe_mp3[sarigama.lk].mp3',
            artist: 'මගෙ අමල්බිසෝ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    chandraMandale() {
        this.myTracks2 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Punchi%20Saviye__Sunil%20Eadirisinghe_mp3[sarigama.lk].mp3',
            artist: 'චන්ද්‍ර මණ්ඩලේ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    puraPoya() {
        this.myTracks3 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Pura%20Poya%20Handata__Sunil%20Eadirisinghe_mp3[sarigama.lk].mp3',
            artist: 'පුර පෝය හදට',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }
    sandakada() {
        this.myTracks4 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Sandakada%20Pahanaka__Sunil%20Eadirisinghe_mp3[sarigama.lk].mp3',
            artist: 'සඳකඩපහනක',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }
    dewaniBudun() {
        this.myTracks5 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Devani%20Budun%20Lesa__Sunil%20Eadirisinghe_mp3[sarigama.lk].mp3',
            artist: ' දෙවැනි බුදුන් ලෙස',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }
    hansaRajini() {
        this.myTracks6 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Hansa%20Rajini__Sunil%20Eadirisinghe_mp3[sarigama.lk].mp3',
            artist: 'හංස රාජිනී සේ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }
    lenchina() {
        this.myTracks7 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Lenchina%20Mage%20Nangiye__Sunil%20Eadirisinghe_mp3[sarigama.lk].mp3',
            artist: 'ලෙන්චිනා මගෙ නංගියේ ඇයි',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }
    minisa() {
        this.myTracks8 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Minisa%20Suwandai%20Malase__Sunil%20Eadirisinghe_mp3[sarigama.lk].mp3',
            artist: 'මිනිසා සුවඳයි මල සේ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }
    pataDedunu() {
        this.myTracks9 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Paata%20Dedunu%20__Sunil%20Eadirisinghe_mp3[sarigama.lk].mp3',
            artist: 'පාට දේදුනු සේදිලා',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }
    shilpaSondin() {
        this.myTracks10 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Shilpa%20Sondin__Sunil%20Eadirisinghe_mp3[sarigama.lk].mp3',
            artist: 'ශිල්ප සොඳින් දැනගන්න ගිහින් නුඹ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }
    soyaaPilisaranak() {
        this.myTracks11 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Soya%20Pilisaranak_Sunil%20Eadirisinghe__Sunil%20Eadirisinghe_mp3[sarigama.lk].mp3',
            artist: ' සොයා පිළිසරණක් ලොවෙන්',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }
    
     kawurunda() {
        this.myTracks12 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Kawurunda%20Oba%20Mage__Sunil%20Eadirisinghe_mp3[sarigama.lk].mp3',
            artist: ' කවුරුන්ද ඔබ මගේ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }
    
    panaMadaKadithi() {
        this.myTracks13 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Pena%20Madakadithi__Sunil%20Eadirisinghe_mp3[sarigama.lk].mp3',
            artist: ' පැන මඩ කඩිති',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }
    
    ionViewDidLoad() {
        console.log('ionViewDidLoad SunilPage');
    }

}

