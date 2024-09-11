import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { VersusComponent } from '../versus/versus.component';
import { Player } from '../tournament/player';
import { versus } from '../tournament/versus';
import { TournamentService } from '../tournament.service';

@Component({
  selector: 'app-ronda',
  templateUrl: './ronda.component.html',
  styleUrls: ['./ronda.component.scss']
})
export class RondaComponent implements OnInit{
  @Input() versusList: { player1: Player, player2: Player }[] = [];

constructor(private tournamentService: TournamentService){}


  ngOnInit(): void {
    const mode = 1;        // Ejemplo de valor dinámico
    const difficulty = 1;  // Ejemplo de valor dinámico

    this.tournamentService.setMode(mode);
    this.tournamentService.setDifficulty(this.calculateDifficulty(this.versusList.length));
  }


  private calculateDifficulty(playersRemaining: number): number {
    if (playersRemaining === 1) {
      return 4;
    } else if (playersRemaining === 2) {
      return 3;
    } else if (playersRemaining > 2) {
      return 2;
    } else {
      return 1; // Para la primera ronda
    }
  }

nextRound(){
  this.tournamentService.generateRound();
}
}
