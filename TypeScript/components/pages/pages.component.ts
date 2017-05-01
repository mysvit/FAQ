import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: 'pages.component.html',
  styleUrls: ['pages.component.css']
})

export class ThumbnailSelectorPagesComponent implements OnInit {

  public pagesList = [];
  public totalPagesList = [];
  public selectedPage: number;
  public startPage: number;
  public endPage: number;
  public totalPages: any;
  public diapasonLabel: any;

  @Input() totalItems: any;
  @Input() itemsOnPage: any;
  @Input() pageSize = 5;

  @Output() onPageSelected: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
    this.initData();
    this.clreatePageNumbers();
  }

  private initData() {
    this.selectedPage = 1;
    this.startPage = 1;
    this.endPage = this.pageSize;
    this.totalPages = Math.floor(this.totalItems / this.itemsOnPage);
    if ((this.totalItems % this.itemsOnPage) > 0) {
      this.totalPages += 1;
    }
    for (let i = this.startPage; i <= this.totalPages; i++) {
      this.totalPagesList.push(i);
    }
  }

  private clreatePageNumbers() {
    if (this.selectedPage < this.startPage || this.selectedPage > this.endPage) {
      this.startPage = this.selectedPage;
      this.endPage = this.selectedPage + this.pageSize - 1;
    }

    this.pagesList = [];
    for (let i = this.startPage; i <= this.endPage; i++) {
      if (i > 0 && i <= this.totalPages) {
        this.pagesList.push(i);
      }
    }
  }

  public pageSelected(num: any) {
    if (num < 1 || num > this.totalPages) {
      return;
    }
    this.selectedPage = Number(num);
    this.clreatePageNumbers();
    this.onPageSelected.emit((this.selectedPage - 1) * this.itemsOnPage);
  }

  public getDiapason(): string {
    return ((this.selectedPage - 1) * this.pageSize)
      + ' - ' + ((this.selectedPage - 1) * this.itemsOnPage + this.pageSize)
      + ' of ' + this.totalItems + ' items';
  }

}
