import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import { TeamsPage } from '../pages.ts';
import { EliteApi } from '../../app/shared/shared';

/*
  Generated class for the Tournaments page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html'
})
export class TournamentsPage {

  tournaments: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi: EliteApi,
              private loadingController: LoadingController) {}

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Getting tournaments...'
    });

    loader.present().then(() => {
      this.eliteApi.getTournaments().then(data => {
        this.tournaments = data;
        loader.dismiss();
      });
    });

  }

  itemTapped($event, tourney){
    this.navCtrl.push(TeamsPage, tourney);
  }
}
