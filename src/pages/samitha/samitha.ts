import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AudioProvider} from 'ionic-audio';

/**
 * Generated class for the SamithaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-samitha',
  templateUrl: 'samitha.html',
})
export class SamithaPage {

myTracks: any[];
    myTracks2: any[];
    myTracks3: any[];
    myTracks4: any[];
    myTracks5: any[];
    myTracks6: any[];
    myTracks7: any[];
    myTracks8: any[];
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

    laaSanda() {
        this.myTracks = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/La%20Sanda%20Aye%20Payala__Samitha%20Mudunkotuwa_mp3[www.sarigama.lk].mp3',
            artist: ' ලා සඳ ආයේ පායාලා.. ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }	

    ranaHansa() {
        this.myTracks2 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Rana%20Hansa%20Yuwala_Samitha%20Mudunkotuwa__Samitha%20Mudunkotuwa_mp3[sarigama.lk].mp3',
            artist: 'රණ හංස යුවල නිමල නිල් ජලාසේ  ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    pipichchaMal() {
        this.myTracks3 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Pipichcha%20Mal__Samitha%20Mudunkotuwa_mp3[sarigama.lk].mp3 ',
            artist: ' පිපිච්ච මල් උඩ  ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    iraPaaya() {
        this.myTracks4 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Ira%20Paaya_Samitha%20Mudunkotuwa%20V%201__Samitha%20Mudunkotuwa_mp3[sarigama.lk].mp3',
            artist: '  ඉර පායා  ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    saaraSadisi() {
        this.myTracks5 = [{
            src: 'http://s1.jayasrilanka.info/albums/Iraj-Weeraratne/Sara%20Sadisi%20Pethi%20-%20Iraj%20Ft%20Samitha%20Mudunkotuwa.mp3',
            artist: ' සාර සදිසි පෙති ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    kolompure() {
        this.myTracks6 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Kolompure_Samitha%20Mudunkotuwa__Samitha%20Mudunkotuwa_mp3[sarigama.lk].mp3',
            artist: '  කොලොම්පුරේ ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    gumuGumuwa() {
        this.myTracks7 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Gumu%20Gumuwa%20Wadule_Samitha%20Mudunkotuwa__Samitha%20Mudunkotuwa_mp3[sarigama.lk].mp3',
            artist: ' ගුමු ගුමුව ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    mamaSil() {
        this.myTracks8 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Mama%20Sil%20Binda%20Gaththe__Samitha%20and%20Ranjan_mp3[www.sarigama.lk].mp3',
            artist: '   මම සිල් බිඳ ගත්තෙ  ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SamithaPage');
  }

}
