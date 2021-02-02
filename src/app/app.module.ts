import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { NgBrazil, TextMask } from 'ng-brazil';
import { CustomFormsModule } from 'ng2-validation';

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveforms/cadastro/cadastro.component';
import { NavegacaoModule } from './navegacao/navegacao.module';


import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppRoutingModule } from './app.routes';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { ImageFormaterPipe } from './demos/pipes/filmes/image.pipe';
import { BarComponent } from './demos/bar-di-zones/bar.component';
import { BarModule } from './demos/bar-di-zones/bar.module';
import { BarServices } from './demos/bar-di-zones/bar.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TodoModule } from './demos/todo-list/todo.module';

export const BAR_PROVIDERS: Provider[] = [
  BarServices
];

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe
  ],
  imports: [
    TextMask.TextMaskModule,
    NgBrazil,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NavegacaoModule,
    CustomFormsModule,
    HttpClientModule,
    AppRoutingModule,
    TodoModule,
    BarModule.forRoot({
      unidadeId: 1000,
      unidadeToken: 'eca938c99a0e9ff91029dc'
    })
  ],
  providers: [
    AuthGuard,
    CadastroGuard
    
   // BAR_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }