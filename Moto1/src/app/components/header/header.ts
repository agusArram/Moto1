import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule], //ese RoputerModule te eprmite usar un recurso en html que te permite llamar a cada pagina sin recargar nada
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
