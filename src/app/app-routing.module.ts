import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { AddMatchesComponent } from './components/add-matches/add-matches.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { SearchComponent } from './components/search/search.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { StadiumInfoComponent } from './components/stadium-info/stadium-info.component';
import { SearchTeamStadiumComponent } from './components/search-team-stadium/search-team-stadium.component';
import { SearchPlayerComponent } from './components/search-player/search-player.component';
import { ImcComponent } from './components/imc/imc.component';
import { WeatherComponent } from './components/weather/weather.component';


const routes: Routes = [
  { path:"", component:HomeComponent},
   { path:"signin", component:LoginComponent},
   { path:"subscription", component:SignupComponent},
   { path:"signupAdmin", component:SignupComponent},
   {path:"myMatches" , component:MatchesComponent},
   {path:"players" , component:PlayersComponent},
   {path:"addMatches" , component:AddMatchesComponent},
   {path:"addteam" , component:AddTeamComponent},
   {path:"addplayer" , component:AddPlayerComponent},
   {path:"admin" , component:AdminComponent},
   {path:"infoMatch/:id" ,component:MatchInfoComponent},
   {path:"editMatch/:id" ,component:EditMatchComponent},
   {path:"infoPlayer/:id" ,component:PlayerInfoComponent},
   {path:"editPlayer/:id" ,component:EditPlayerComponent},
   {path:"infoTeam/:id" ,component:TeamInfoComponent},
   {path:"editTeam/:id" ,component:EditTeamComponent},
   {path:"search" ,component:SearchComponent},
   {path:"addstadium" ,component:AddStadiumComponent},
   {path:"infoStadium/:id" ,component:StadiumInfoComponent},
   {path:"searchteamstadium" ,component:SearchTeamStadiumComponent},
   {path:"searchplayer" ,component:SearchPlayerComponent},
   {path:"imc" ,component:ImcComponent},
   {path:"weather" ,component:WeatherComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
