import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AudioProvider} from 'ionic-audio';

/**
 * Generated class for the ShashikaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shashika',
  templateUrl: 'shashika.html',
})
export class ShashikaPage {
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

    apaHamuwunu() {
        this.myTracks = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Apa%20Hamuwuna%20Thana%20__Shashika%20Nisansala_mp3[www.sarigama.lk].mp3',
            artist: '  අප හමුවුන   ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    biththiPaththare() {
        this.myTracks2 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Biththi%20Paththare%20%20%20%20__Sashika%20Nisansala_mp3[sarigama.lk].mp3',
            artist: ' බිත්ති පත්තරේ  ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    duraYanna() {
        this.myTracks3 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Husmak%20Durin__Shashika%20Nisansala_mp3[www.sarigama.lk].mp3',
            artist: 'දුර යන්න සිතුවාට  ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    kiriWeherata() {
        this.myTracks4 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Kiri%20Weherata%20_Sashika%20Nisansala__Sashika%20Nisansala_mp3[sarigama.lk].mp3',
            artist: ' කිරි වෙහෙරට  ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    mageSanda() {
        this.myTracks5 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Mage%20Sanda%20Oba__Shashika%20Nisansala_mp3[www.sarigama.lk].mp3',
            artist: 'මගේ සඳ ඔබ   ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    sandaEliya() {
        this.myTracks6 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Sanda%20Eliya_Sashika%20Nisansala__Sashika%20Nisansala_mp3[sarigama.lk].mp3',
            artist: 'සඳ එළිය මමයි නම්  ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    tholPethi() {
        this.myTracks7 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Thol%20Pethi%20Vitharak%20__Sashika%20Nisansala_mp3[sarigama.lk].mp3',
            artist: ' තොල් පෙති විතරක්   ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    sandaReta() {
        this.myTracks8 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Sanda%20Reta%20Reta%20__Sashika%20Nisansala_mp3[sarigama.lk].mp3',
            artist: 'සද රෑට රෑට  ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    paramitha() {
        this.myTracks9 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Paramitha%20%20__Sashika%20Nisansala_mp3[sarigama.lk].mp3',
            artist: ' පාරමිතා ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    panhindata() {
        this.myTracks10 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Panhindata%20Mithuru__Sashika%20Nisansala_mp3[sarigama.lk].mp3',
            artist: 'පන්හිඳට  ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShashikaPage');
  }

}
