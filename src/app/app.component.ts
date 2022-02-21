import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Listalibros from '/myApp/src/assets/json/libros.json';
// Importo el archivo JSON

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';

  //nombreLibro : Libro[] = [{nombre:""},{autor:""} ]
  Libros: any = Listalibros;
// Exporto los datos del archivo JSON a la  vista

//aquí definimos el tipo de array
//donde irán los datos del json,

//Lo llamamos con nombreLibro, que es lo que se busca en el
//buscador en el template y lo que mostramos.

//Buscará lo que le pongamos en el input, en el array de libros y nos
//mostrará lo que definamos de ese libro, puede ser el objeto entero o una parte.

}
