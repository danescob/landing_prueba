import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagenComponent } from './component/imagen/imagen.component';
import { FormularioComponent } from './component/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagenComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
