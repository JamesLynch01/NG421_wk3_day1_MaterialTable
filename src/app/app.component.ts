import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {ICharactersList} from '../app/interfaces/icharacters-list';
import {CharactersListService} from '../app/services/characters-list.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MaterialTable';
  displayedColumns: string [] = ['name', 'age', 'race', 'alignment', 'class', 'subclass', 'level', 'havePlayed', 'role', 'rolePlayQuirk', 'skills'];
  dataSource = new MatTableDataSource<ICharactersList>();

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private charactersListService: CharactersListService) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.charactersListService.getCharacters());
    this.dataSource.sort = this.sort; 
  }

  applyFilter(filter: string): void{
    this.dataSource.filter = filter.trim().toLowerCase();
  }
}
