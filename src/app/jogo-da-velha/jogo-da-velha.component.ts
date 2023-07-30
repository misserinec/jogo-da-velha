import { Component, OnInit } from '@angular/core';

import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit(): void {
    this.jogoDaVelhaService.inicializar();  //Chamar o método de inicializar do serviço
  }

  /*  Tornar os serviços visíveis  */
  /**
   * @description Retorna se a tela de início deve ser exibida
   * @retun boolean
   */
  get showInicio():boolean{
    return this.jogoDaVelhaService.showInicio;
  }

  /**
   * @description Retorna se o tabuleiro deve ser exibido
   * @retun boolean
   */
   get showTabuleiro():boolean{
    return this.jogoDaVelhaService.showTabuleiro;
  }

  /**
   * @description Retorna se a tela de fim de jogo deve ser exibida
   * @retun boolean
   */
   get showFinal():boolean{
    return this.jogoDaVelhaService.showFinal;
  }

  /**
   * @description Inicializa os dados de um jogo
   * @return void
   */
  iniciarJogo(): void{
    this.jogoDaVelhaService.iniciarJogo();
  }

  /**
   * @description Realiza uma jogada ao clicar um local do tabuleiro
   * @param number posX
   * @param number posY
   * @return void
   */
  jogar(posX: number, posY:number):void{                //Recebe do HTML
    return this.jogoDaVelhaService.jogar(posX, posY);          //Envia para o serviço
  }

  /**
   * @description Retorna se a peça X deve ser exibida para a cordenada informada
   * @param posX
   * @param posY
   * @return boolean
   */
  exibirX(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirX(posX, posY);
  }

  /**
   * @description Retorna se a peça O deve ser exibida para a cordenada informada
   * @param posX
   * @param posY
   * @return boolean
   */
   exibirO(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirO(posX, posY);
  }

  /**
   * @description Retorna se a marcação de Vitória deve ser exibida para a cordenada informada
   * @param posX
   * @param posY
   * @return boolean
   */
   exibirVitoria(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirVitoria(posX, posY);
  }

  /**
   * @description Retorna o número de jogador a jogar
   * @return number
   */
  get jogador(): number{
    return this.jogoDaVelhaService.jogador;
  }

  /**
   * @description Inicia um novo jogo
   * @return void
   */
  novoJogo(): void{
    this.jogoDaVelhaService.novoJogo();
  }
}
