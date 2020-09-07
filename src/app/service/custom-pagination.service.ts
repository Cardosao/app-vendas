import { Injectable } from '@angular/core';
import { Page } from './base/page';
import { Pageable } from './base/pageable';

@Injectable({
  providedIn: 'root'
})
export class CustomPaginationService {

  constructor() { }


  public getNextPage(page: Page<any>): Pageable {
    if (!page.last) {
      page.pageable.pageNumber = (page.pageable.pageNumber + 1);
    }
    return page.pageable;
  }

  public getPreviousPage(page: Page<any>): Pageable {
    if (!page.first) {
      page.pageable.pageNumber = (page.pageable.pageNumber - 1);
    }
    return page.pageable;
  }

  public getPageInNewSize(page: Page<any>, pageSize: number): Pageable {
    page.pageable.pageSize = pageSize;
    page.pageable.pageNumber = Pageable.FIRST_PAGE_NUMBER;

    return page.pageable;
  }

  public getPage(page: Page<any>, pageNumber: number, pageSize: number): Pageable {
    page.pageable.pageSize = pageSize;
    page.pageable.pageNumber = pageNumber;
    console.log(page);
    return page.pageable;
  }

}
