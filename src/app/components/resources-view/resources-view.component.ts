import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResourceLineComponent } from './resource-line/resource-line.component';
import { ImprovementModel } from '../../models/improvement-model';
import { Subscription } from 'rxjs';
import { VillageService } from '../../services/village.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resources-view',
  standalone: true,
  imports: [ResourceLineComponent, CommonModule],
  templateUrl: './resources-view.component.html',
  styleUrl: './resources-view.component.css'
})
export class ResourcesViewComponent implements OnInit {
  public displayResources: { [key: string]: number } = {};
  private subscription: Subscription = new Subscription;
  receivedValue: any;

  constructor(private myService: VillageService) { }
  ngOnInit(): void {
    this.subscription = this.myService.valueEmitter$.subscribe((value: boolean) => {
      this.reloadTable();
    });
  }

  reloadTable(): void {
   
   this.displayResources = this.myService.getResources();
   console.log(this.displayResources);
    
  }

}
