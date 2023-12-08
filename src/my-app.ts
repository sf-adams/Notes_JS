import { DogComponent } from "./components/dog-component";
import { DateComponent } from "./components/date-component";
import { NotesComponent } from "./components/notes-component";
import { ExchangeComponent } from "./components/exchange-component";

export class MyApp {
  public components = [
    NotesComponent,
    DateComponent,
    DogComponent,
    ExchangeComponent,
  ];
}
