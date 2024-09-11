import { Injectable } from '@angular/core';
import { RondaComponent } from './ronda/ronda.component';
import { Player } from './tournament/player';
import { VersusComponent } from './versus/versus.component';
import { versus } from './tournament/versus';
import { round } from './tournament/round';


@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  private players: Player[] = [];
  private versus: versus[] = [];
  private ronda: round[] = [];
  private mode: number = 1; 
  private difficulty: number = 1; 

  constructor() { 

  }

  setMode(mode: number): void {
    this.mode = mode;
  }

  getMode(): number {
    return this.mode;
  }

  setDifficulty(difficulty: number): void {
    this.difficulty = difficulty;
  }

  getDifficulty(): number {
    return this.difficulty;
  }

  addPlayer(name: string): void {
    const newPlayer = new Player(name);
    this.players.push(newPlayer);
  }

  deletePlayer(index: number) {
    this.players.splice(index, 1); // Eliminar el jugador por índice
  }

  editPlayer(index: number) {
    // Implementa la lógica para editar el jugador aquí
    const newName = prompt('Editar nombre:', this.players[index].name);
    if (newName && newName.trim()) {
      this.players[index].name = newName.trim();
    }
}

  getPlayers(): Player[] {
    return this.players;
  }



  generateVersus(players: Player[]): versus[] {
      // Mezclar los jugadores para obtener un emparejamiento aleatorio
      let shuffledPlayers = this.restartPlayer(this.shuffleArray(players));
      let versusAux: versus[] = [];
      
  
      // Formar parejas de jugadores
      for (let i = 0; i < shuffledPlayers.length; i += 2) {
          // Si hay un par completo
          if (i + 1 < shuffledPlayers.length) {
              const player1 = shuffledPlayers[i];
              const player2 = shuffledPlayers[i + 1];
              versusAux.push({ player1, player2, isActive: true});
          } else {
              // Si hay un jugador sin pareja, emparejarlo con un jugador fantasma
              const player1 = shuffledPlayers[i];
              player1.winner = true;
              const player2 = new Player('👻', false); // Nuevo jugador fantasma
             
              versusAux.push({ player1, player2, isActive: false});
          }
          
      }
      
      return versusAux;
  }

  generateRound(): round[]{
    if (this.ronda.length === 0) {
      this.ronda.push(new round(this.generateVersus(this.players), true));
    }else{
      this.ronda.push(new round(this.generateVersus(this.getWinningPlayers()), true));
    }
    return this.ronda;
  }

  restartPlayer(players: Player[]){
    players.forEach(player => {
      player.winner = false;
    });

    return players
  }

  private shuffleArray(array: Player[]): Player[] {
    return array
      .map((a) => [Math.random(), a] as [number, Player])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);
  }


  getVersusComponents(): versus[] {
    return this.versus;
  }

  getWinningPlayers(): Player[] {
    return this.players.filter(player => player.winner);
  }


    
  }




