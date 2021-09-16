import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitreComponent } from './Composants/titre/titre.component';
import { PersonnesComponent } from './Composants/personnes/personnes.component';
import { MessageComponent } from './Composants/message/message.component';
import { NouveauComponent } from './Composants/nouveau/nouveau.component';

@NgModule({
  declarations: [
    AppComponent,
    TitreComponent,
    PersonnesComponent,
    MessageComponent,
    NouveauComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
