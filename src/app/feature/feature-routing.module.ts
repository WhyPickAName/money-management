import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyMoneyComponent } from './components/my-money/my-money.component';
import { HomeComponent } from './components/home/home.component';
import { SummaryComponent } from './components/summary/summary.component';
import { OutcomeComponent } from './components/outcome/outcome.component';
import { IncomeComponent } from './components/income/income.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'mymoney',
    component: MyMoneyComponent
  },
  {
    path: 'income',
    component: IncomeComponent
  },
  {
    path: 'outcome',
    component: OutcomeComponent
  },
  {
    path: 'summary',
    component: SummaryComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
