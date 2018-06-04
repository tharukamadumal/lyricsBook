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
            artist: ' දකුනේ පින් ඇති  ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShashikaPage');
  }

}
