import { Component, EventEmitter, Input,Output } from '@angular/core';
import { ImprovementModel } from '../../models/improvement-model';
import { VillageService } from '../../services/village.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  grid: ImprovementModel[][] = [];
  
  constructor(public villageService: VillageService) {}
  resources = this.villageService.getResources(); 
  @Input() resources:{person: number; lumber: number; grain: number; water: number; sheep: number; } = {person:0,lumber: 0, grain: 0, water: 0, sheep: 0};
  @Output() add = new EventEmitter<number>(); 
  @Output() eidt = new EventEmitter<number>(); 
  gridesize =5;
  addImprovement(index: number) {
    this.add.emit(index);
  }

  editImprovement(index: number) {
    this.eidt.emit(index);
  }
}
