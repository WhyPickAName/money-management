import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MyMoneyComponent } from './components/my-money/my-money.component';
import { HomeComponent } from './components/home/home.component';
import { MoneyService } from './service/money.service';



@NgModule({
  declarations: [
    MyMoneyComponent,
    HomeComponent,
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
