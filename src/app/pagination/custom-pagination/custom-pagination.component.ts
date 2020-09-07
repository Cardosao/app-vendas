import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {Page} from '../../service/base/page';

@Component({
  selector: 'app-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.css']
})
export class CustomPaginationComponent implements OnInit {

  @Input() page: Page<any>;
  @Output() nextPageEvent = new EventEmitter();
  @Output() previousPageEvent = new EventEmitter();
  @Output() pageSizeEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() pageNumberEvent: EventEmitter<number[]> = new EventEmitter<number[]>();

  constructor() { }

  ngOnInit(): void {
  }

  nextPage(): void {
    this.nextPageEvent.emit(null);
  }

  previousPage(): void {
    this.previousPageEvent.emit(null);
  }

  updatePageSize(pageSize: number): void {
    this.pageSizeEvent.emit(pageSize);
  }

  getPage(pageNumber: number, pageSize: number): void {
    const numbers = new Array<number>();
    numbers[0] = pageNumber;
    numbers[1] = pageSize;
    this.pageNumberEvent.emit(numbers);
  }

}
