import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
// @ts-ignore
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

 hidden = true;
 stores =  ['arbeh','eteth','kahe','arbeh','eteth','kahe'];
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['January', 'February', 'March', 'April','May', 'June','July'];
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataset[] = [
    { data: [45, 37, 60, 70, 46, 33,55], label: 'Sales Forecasting ' }
  ];

  constructor(private fb: FormBuilder, private usersService: UserService, private router: Router) { }
  public productForm = this.fb.group({
    store: ['', Validators.required],
    productid : ['', Validators.required],
  });
  // tslint:disable-next-line:typedef
  get form() {
    return this.productForm.controls;
  }
  ngOnInit(): void {
  }
  onSubmit(): void {
    this.hidden = ! this.hidden;
  }


}
