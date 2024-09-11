import { Injectable } from '@angular/core';
import { Song } from './tournament/song';


@Injectable({
  providedIn: 'root',
})
export class SongService {
  private songs: Song[] = [
    new Song("Anything I Do", "CLiQ ft. Ms Banks and Alika", 3, 4, 3, false),
    new Song("As It Was", "Harry Styles", 1, 2, 2, false),
    new Song("Boy With Luv", "BTS ft. Halsey", 3, 3, 2, false),
    new Song("Bring Me to Life", "Evanescence", 2, 3, 3, false),
    new Song("Can't Stop the Feeling!", "Justin Timberlake", 2, 1, 2, false),
    new Song("Danger! High Voltage", "Electric Six", 1, 2, 2, false),
    new Song("Disco Inferno", "The Trammps", 1, 1, 2, false),
    new Song("Drivers License", "Olivia Rodrigo", 1, 1, 1, false),
    new Song("Dynamite", "BTS", 1, 2, 2, false),
    new Song("Farfalle", "Sangiovanni", 1, 4, 2, false),
    new Song("Good Ones", "Charli XCX", 1, 1, 2, false),
    new Song("Heat Waves", "Glass Animals", 1, 2, 1, false),
    new Song("I Knew You Were Trouble (Taylor's Version)", "Taylor Swift", 1, 2, 1, false),
    new Song("If You Wanna Party", "The Just Dancers", 1, 2, 3, false),
    new Song("Locked Out of Heaven", "Bruno Mars", 1, 2, 2, false),
    new Song("Love Me Land", "Zara Larsson", 1, 3, 2, false),
    new Song("Magic", "Kylie Minogue", 1, 1, 1, false),
    new Song("Majesty", "Apashe ft. Wasiu", 2, 3, 3, false),
    new Song("Million Dollar Baby", "Ava Max", 1, 1, 1, false),
    new Song("More", "K/DA ft. Madison Beer, (G)-IDLE, Lexie Liu, Seraphine, Jaira Burns", 4, 4, 3, false),
    new Song("Numb", "Linkin Park", 1, 3, 3, false),
    new Song("Physical", "Dua Lipa", 1, 1, 3, false),
    new Song("Playground", "Bea Miller", 1, 1, 2, false),
    new Song("Psycho", "Red Velvet", 3, 4, 2, false),
    new Song("Radioactive", "Imagine Dragons", 3, 2, 1, false),
    new Song("Rather Be", "Clean Bandit ft. Jess Glynne", 1, 3, 3, false),
    new Song("Sissy That Walk", "RuPaul", 1, 1, 2, false),
    new Song("Stay", "The Kid Laroi and Justin Bieber", 1, 2, 2, false),
    new Song("Sweet but Psycho", "Ava Max", 1, 2, 2, false),
    new Song("Telephone", "Lady Gaga ft. Beyoncé", 1, 2, 2, false),
    new Song("Therefore I Am", "Billie Eilish", 1, 1, 1, false),
    new Song("Top of the World", "Shawn Mendes", 1, 1, 1, false),
    new Song("Toxic (Just Dance 2)", "Britney Spears", 1, 1, 1, false),
    new Song("Toxic", "Britney Spears", 1, 2, 2, false),
    new Song("Walking on Sunshine", "Top Culture", 1, 2, 3, false),
    new Song("Wannabe", "Itzy", 3, 4, 3, false),
    new Song("Watch Out for This (Bumaye)", "Major Lazer ft. Busy Signal, The Flexican and FS Green", 4, 2, 3, false),
    new Song("We Don’t Talk About Bruno", "Cast from Encanto", 1, 2, 1, false),
    new Song("Witch", "Apashe ft. Alina Pash", 1, 2, 2, false),
    new Song("Woman", "Doja Cat", 4, 2, 1, false),
    new Song("Wouldn’t It Be Nice", "The Sunlight Shakers", 2, 1, 2, false),
    new Song("Zooby Doo", "Tigermonkey", 2, 1, 2, false),
    new Song("Boy With Luv", "Extreme Version", 1, 4, 3, true),
new Song("Can’t Stop the Feeling!", "Danceverses Prince Version", 1, 3, 3, true),
new Song("Danger! High Voltage", "Alternate Version", 2, 2, 3, true),
new Song("Dynamite", "Extreme Version", 4, 4, 3, true),
new Song("More", "Seraphine Version", 1, 2, 1, true),
new Song("Physical", "Extreme Version", 1, 4, 3, true),
new Song("Psycho", "Alternate Version", 1, 1, 1, true),
new Song("Stay", "Inflatable Version", 2, 1, 2, true),
new Song("Stay", "VIP Version", 3, 4, 2, true),
new Song("Telephone", "Runaway Version", 2, 2, 1, true),
new Song("Toxic", "Extreme Version", 1, 4, 2, true),
new Song("Wannabe", "Alternate Version", 1, 2, 2, true),
new Song("Woman", "All-Mother Version", 1, 2, 2, true),
new Song("Woman", "VIP Version", 1, 3, 2, true),
new Song("A Night in the Château de Versailles", "The Just Dance Orchestra", 2, 2, 1, false),
new Song("A Queda", "Gloria Groove", 1, 2, 2, false),
new Song("After Party", "Banx & Ranx ft. Zach Zoya", 1, 2, 2, false),
new Song("Butter", "BTS", 4, 4, 2, false),
new Song("Calm Down", "Rema", 2, 1, 1, false),
new Song("Can’t Tame Her", "Zara Larsson", 1, 3, 2, false),
new Song("Canned Heat", "Jamiroquai", 1, 2, 3, false),
new Song("Chaise Longue", "Wet Leg", 2, 2, 2, false),
new Song("Cradles", "Sub Urban", 1, 3, 2, false),
new Song("Cure For Me", "AURORA", 1, 2, 2, false),
new Song("Despechá", "ROSALÍA", 1, 1, 1, false),
new Song("Don’t Cha", "The Pussycat Dolls ft. Busta Rhymes", 3, 2, 1, false),
new Song("Flowers", "Miley Cyrus", 1, 1, 1, false),
new Song("Gimme More", "Britney Spears", 1, 2, 2, false),
new Song("How You Like That", "BLACKPINK", 4, 4, 3, false),
new Song("I Am My Own Muse", "Fall Out Boy", 1, 3, 3, false),
new Song("I Wanna Dance with Somebody", "Whitney Houston", 1, 2, 2, false),
new Song("I’m Good (Blue)", "David Guetta & Bebe Rexha", 2, 2, 3, false),
new Song("I’m Not Here to Make Friends", "Sam Smith", 3, 2, 1, false),
new Song("It’s the Most Wonderful Time of the Year", "Andy Williams", 3, 1, 2, false),
new Song("Kill Bill", "SZA", 1, 1, 1, false),
new Song("Makeba", "Jain", 3, 2, 2, false),
new Song("My Name Is", "D Billions", 4, 1, 1, false),
new Song("Never Be Like You", "Flume ft. Kai", 1, 3, 3, false),
new Song("Otonablue", "Atarashii Gakko!", 4, 2, 1, false),
new Song("Rapper’s Delight", "Groove Century", 1, 2, 2, false),
new Song("Sail", "AWOLNATION", 1, 2, 2, false),
new Song("Say My Name", "ATEEZ", 3, 4, 3, false),
new Song("Seven", "Jung Kook ft. Latto", 1, 2, 2, false),
new Song("Shine a Little Love", "The Sunlight Shakers", 1, 2, 1, false),
new Song("Stronger (What Doesn’t Kill You)", "Kelly Clarkson", 1, 1, 3, false),
new Song("Survivor", "Destiny's Child", 3, 2, 3, false),
new Song("Swan Lake", "The Just Dancers", 1, 2, 2, false),
new Song("Tainted Love", "The Just Dancers", 4, 2, 3, false),
new Song("This Wish", "Ariana DeBose", 1, 1, 1, false),
new Song("Tití Me Preguntó", "Bad Bunny", 3, 2, 2, false),
new Song("Treasure", "Bruno Mars", 1, 2, 2, false),
new Song("Vampire", "Olivia Rodrigo", 2, 2, 2, false),
new Song("Wasabi", "Little Mix", 1, 2, 2, false),
new Song("Whitney", "Rêve", 1, 2, 2, false),
new Song("Woof", "Sofi Tukker ft. Kah-Lo", 2, 1, 2, false),
new Song("You Should See Me in a Crown", "Billie Eilish", 2, 2, 2, false),
new Song("Butter", "Alternate Version", 1, 2, 2, true),
new Song("Cure For Me", "Alternate Version", 1, 2, 2, true),
new Song("Don’t Cha", "Extreme Version", 1, 4, 3, true),
new Song("Flowers", "Fitness Version", 1, 2, 3, true),
new Song("Gimme More", "Extreme Version", 1, 4, 3, true),
new Song("How You Like That", "Alternate Version", 1, 2, 2, true),
new Song("If You Wanna Party", "VIP Version", 1, 4, 3, true),
new Song("I Wanna Dance with Somebody (Who Loves Me)", "Extravaganza Version", 1, 1, 1, true),
new Song("I’m Good (Blue)", "Extreme Version", 1, 4, 3, true),
new Song("Say My Name", "Alternate Version", 1, 2, 2, true),
new Song("Survivor", "Fitness Version", 1, 1, 3, true),
new Song("Tití Me Preguntó", "Barbecue Version", 2, 1, 1, true),
new Song("Wasabi", "Extreme Version", 2, 4, 3, true)
  ];
  private usedSongs: Set<number> = new Set(); 

  constructor() {}

  getSongs(mode: number, difficulty: number): Song[] {
    return this.songs.filter(song => song.mode === mode && song.difficulty === difficulty);
  }


  randomSongs(mode: number, difficulty: number): Song[] {
    const availableSongs = this.getSongs(mode, difficulty).filter((_, index) => !this.usedSongs.has(index));
    let numberOfSongs = 1; // Default to 1 for difficulty 1

    if (difficulty === 3) {
      numberOfSongs = 3; // Show 3 songs for difficulty 3
    } else if (difficulty === 4) {
      numberOfSongs = 5; // Show 5 songs for difficulty 4
    }

    const selectedSongs: Song[] = [];
    
    for (let i = 0; i < numberOfSongs; i++) {
      if (availableSongs.length === 0) break; // No hay más canciones disponibles

      const randomIndex = Math.floor(Math.random() * availableSongs.length);
      selectedSongs.push(availableSongs[randomIndex]);
      this.usedSongs.add(this.songs.indexOf(availableSongs[randomIndex])); // Marcar como usada
      availableSongs.splice(randomIndex, 1); // Eliminar la canción seleccionada de la lista de disponibles
    }

    return selectedSongs;
  }
}
