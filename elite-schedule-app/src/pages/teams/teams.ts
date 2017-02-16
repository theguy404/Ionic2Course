import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../pages.ts';
import { EliteApi } from '../../app/shared/shared';

/*
  Generated class for the Teams page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})
export class TeamsPage {

  teams = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi: EliteApi) {}

  ionViewDidLoad() {
    let selectedTourney = this.navParams.data;

    this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data => {
      this.teams = data.teams;
    });
  }
  itemTapped($event, team){
    this.navCtrl.push(TeamHomePage, team);
  }
}
