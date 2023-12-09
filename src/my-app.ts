import { DateComponent } from "./components/date-component";
import { NotesComponent } from "./components/notes-component";
import { ExchangeComponent } from "./components/exchange-component";
import { Header } from "./components/header";

export class MyApp {
  public components = [
    Header,
    NotesComponent,
    DateComponent,
    ExchangeComponent,
  ];
}
