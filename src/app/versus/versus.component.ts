import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../tournament/player';
import { Song } from '../tournament/song';
import { SongService } from '../song.service';
import { TournamentService } from '../tournament.service';


@Component({
  selector: 'app-versus',
  templateUrl: './versus.component.html',
  styleUrls: ['./versus.component.scss']
})
export class VersusComponent implements OnInit{
  @Input() player1!: Player;
  @Input() player2!: Player;
  @Input() isActive!: boolean;
  @Input() numero!: number; 
  selectedSong!: Song;
  songs: Song[] = [];

  constructor(private songService: SongService, private tournamentService: TournamentService){
  }   

  ngOnInit(): void {
    const mode = this.tournamentService.getMode();
    const difficulty = this.tournamentService.getDifficulty();
    this.songs = this.songService.randomSongs(mode, difficulty);
  }

  declareWinner(player: { name: string, winner: boolean }) {
    const confirmWin = confirm(`¿Declarar ganador a ${player.name}?`);
    if (confirmWin) {
      player.winner = true;
      alert(`${player.name} ha sido declarado ganador.`);
      this.isActive = !this.isActive;
    }
  }



}





