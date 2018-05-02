import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AudioProvider} from 'ionic-audio';

/**
 * Generated class for the ChandanaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-chandana',
    templateUrl: 'chandana.html',
})
export class ChandanaPage {
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

    EhalaMal() {
        this.myTracks = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Ehela%20Mal%20Pipena%20%20__Chandana%20Liyanarachchi_mp3[sarigama.lk].mp3',
            artist: '  ඇහල මල් ‍පිපෙනා ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }

    premayaLowa() {
        this.myTracks2 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Premaya%20Lowa%20__Chandana%20Liyanarachchi_mp3[sarigama.lk].mp3',
            artist: '  ප්‍රේමය ලොව   ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }
    
    muthuMaala() {
        this.myTracks3 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Muthumala%20Hatha%20%20__Chandana%20Liyanarachchi_mp3[sarigama.lk].mp3',
            artist: ' මුතු මාල',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }
    
    suwandaThiya() {
        this.myTracks4 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Suwanda%20Thiya%20%20__Chandana%20Liyanarachchi_mp3[sarigama.lk].mp3',
            artist: '   සුවඳ තියා  ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }
    
    kawiSipada() {
        this.myTracks5 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Kavi%20Seepada%20%20__Chandana%20Liyanarachchi_mp3[sarigama.lk].mp3',
            artist: 'කවි සීපද ',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }]
    }
    
    ionViewDidLoad() {
        console.log('ionViewDidLoad ChandanaPage');
    }

}
