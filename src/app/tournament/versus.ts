import { Player } from "./player";


export class versus{
    constructor(public player1: Player, public player2: Player, public isActive: boolean = false) {}
}