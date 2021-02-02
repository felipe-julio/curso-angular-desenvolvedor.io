import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar.component';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
      BarComponent

  ],
  exports: [
      BarComponent
  ],
  providers:[
  ]
})
export class BarModule { 
  static forRoot(config: BarUnidadeConfig) : ModuleWithProviders {
    return {
       ngModule: BarModule,
       providers: [
          { provide: 'ConfigManualUnidade' , useValue: config },
          { provide: BAR_UNIDADE_CONFIG , useValue: config },
       ]
    }
  }

  static forChild(){
    
  }

}
