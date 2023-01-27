import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { MyMoneyModel } from '../../models/money.model';
import { MyMoney } from '../../models/my-money.model';
import { MoneyService } from '../../service/money.service';

@Component({
  selector: 'app-my-money',
  templateUrl: './my-money.component.html',
  styleUrls: ['./my-money.component.scss']
})
export class MyMoneyComponent implements OnInit, OnDestroy {
  constructor(private moneyService: MoneyService) {}

  myMoney!: MyMoney[];
  onDestroy$: Subject<any> = new Subject<any>();
  total: number = 0;

  ngOnInit(): void {
    this.initializeData();
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.unsubscribe();
  }

  addNewRow(): void {
    this.myMoney.push(new MyMoneyModel())
    console.log(this.myMoney)
    this.calculateTotal();
  }

  calculateTotal(): void {
      this.total = 0;
      this.myMoney.map((asset: any) => {
        this.total += asset.amount
      })
  }

  submitData(): void {
    this.moneyService.setMyMoney(this.myMoney);
  }

  private initializeData(): void {
    this.moneyService.getMyMoney()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((myMoney: MyMoney[]) => {
        this.myMoney = myMoney;
        this.calculateTotal();
      }, () => {
        
      });
  }
}
