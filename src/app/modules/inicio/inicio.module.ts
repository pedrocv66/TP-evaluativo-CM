import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

// VISTAS - PÁGINAS
import { InicioComponent } from './pages/inicio/inicio.component';

// COMPONENTES LOCALES
import { CardComponent } from './components/card/card.component';

// COMPONENTES DE MATERIAL
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    InicioComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [
    InicioComponent,
    CardComponent,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class InicioModule { }
