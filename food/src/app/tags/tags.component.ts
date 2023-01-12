import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { tag } from '../shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  foodPageTags?:string[];
  @Input()
  justifyContent?:string='center'
tags:tag[]=[];
  constructor(private fs:FoodService) { }

  ngOnInit(): void {
    this.tags=this.fs.getAllTags()
  }

}
