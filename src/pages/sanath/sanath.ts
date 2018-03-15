import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AudioProvider} from 'ionic-audio';

/**
 * Generated class for the SanathPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-sanath',
    templateUrl: 'sanath.html',
})
export class SanathPage {
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

    aathaEpita() {
        this.myTracks = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Eatha%20Epita%20%20__Sanath%20Nandasiri_mp3[sarigama.lk].mp3',
            artist: ' ඈත එපිට',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    nirwanaSwarna() {
        this.myTracks2 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Nirwana%20Swarna-Sambodi%20Raja%20__Sanath%20Nandasiri_mp3[www.sarigama.lk].mp3',
            artist: 'නිර්වාණ ස්වර්ණ ද්වාරයෙන්',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    sendeKaluwara() {
        this.myTracks3 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Sulanga%20Numba%20Wage%20%20%20%20__Karunarathne%20Divulgane_mp3[sarigama.lk].mp3',
            artist: ' සුළඟ නුඹ වගෙයි',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    sahasakPathuman() {
        this.myTracks4 = [{
            src: 'http://sarigama.lk/resources/audiofiles/mp3/128/Sahasak%20Pethumal__Sanath%20Nandasiri_mp3[sarigama.lk].mp3',
            artist: 'සහසක් පැතුමන් නැත',
            art: 'assets/imgs/play.png',
            preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
        }];
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SanathPage');
    }

}
