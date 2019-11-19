import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAdditionComponent } from './blog-addition.component';

describe('BlogAdditionComponent', () => {
  let component: BlogAdditionComponent;
  let fixture: ComponentFixture<BlogAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
