import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyMoneyComponent } from './components/my-money/my-money.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'my-money',
    component: MyMoneyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
