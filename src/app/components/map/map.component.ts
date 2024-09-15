import { Component, EventEmitter, Input,OnInit,Output } from '@angular/core';
import { ImprovementModel } from '../../models/improvement-model';
import { VillageService } from '../../services/village.service';
import { CommonModule } from '@angular/common';
import { TileComponent } from './tile/tile.component';
import { AddImprovementDialogComponent } from "./add-improvement-dialog/add-improvement-dialog.component";
import { EditImprovementDialogComponent } from "./edit-improvement-dialog/edit-improvement-dialog.component";

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, TileComponent, AddImprovementDialogComponent, EditImprovementDialogComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  grid: number[] = Array(25).fill(0); 
  improvements: ImprovementModel[] =[]; 
showAddDialog:boolean = false;
showEditDialog:boolean = false;
  constructor(private villageService: VillageService) {}

  ngOnInit(): void {
    this.grid = Array(25).fill(0); //  5x5 grid
    this.improvements = Array(25).fill(null); //empty
    this.improvements[1] = {
      type: 'person',
            level: 1,
            cost: {
              lumber: 5,
              grain: 5,
              water: 5,
              sheep: 1,person:0
            },
            resource: {
              person: 5,
              lumber: 0,
              grain: 0,
              water: 0,
              sheep: 0
            }
     }
   
}
  onCellClick(index: number): void {
   console.log(`${index}`);
   
   if(this.improvements[index]=== null){
console.log("empty cell");
this.showAddDialog =true;
   }else{
    let improvement = this.improvements[index];
    console.log(`${improvement.type} clicked`);
    this.showEditDialog =true;
   }
  }

  
  }
