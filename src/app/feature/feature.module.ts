import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMoneyComponent } from './components/my-money/my-money.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MoneyService } from './services/money.service';
import { SummaryComponent } from './components/summary/summary.component';
import { OutcomeComponent } from './components/outcome/outcome.component';
import { IncomeComponent } from './components/income/income.component';



@NgModule({
  declarations: [
    MyMoneyComponent,
    HomeComponent,
    SummaryComponent,
    OutcomeComponent,
    IncomeComponent
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
