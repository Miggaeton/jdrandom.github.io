import { Component, OnInit } from '@angular/core';
import { Player } from './tournament/player';
import { TournamentService } from './tournament.service';
import { versus } from './tournament/versus'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jdrandom';
  players: Player[] = [];
  versusList: { player1: Player, player2: Player }[] = []
  roundList: { versus: versus[], isActive: boolean}[] = []
  isEditable: boolean = true;

  constructor(private tournamentService: TournamentService){
  
  }
  ngOnInit(): void {
    this.players = this.tournamentService.getPlayers();

  }

  addPlayer(player: string){
    if (player.trim()) {
      this.tournamentService.addPlayer(player)
    }
  }

  deletePlayer(index: number) {
    this.tournamentService.deletePlayer(index);
  }

  editPlayer(index: number) {
    // Implementa la lógica para editar el jugador aquí
    this.tournamentService.editPlayer(index);
}



  runRandom(){
    this.isEditable = false;
  this.roundList = this.tournamentService.generateRound();
  }


}

