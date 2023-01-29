import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMoneyComponent } from './components/my-money/my-money.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MoneyService } from './services/money.service';



@NgModule({
  declarations: [
    MyMoneyComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    SharedModule,
  ],
  providers: [
    MoneyService,
  ]
})
export class FeatureModule {}
