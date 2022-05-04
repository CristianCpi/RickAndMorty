import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickAndMortyMainComponent } from './rick-and-morty-main.component';

describe('RickAndMortyMainComponent', () => {
  let component: RickAndMortyMainComponent;
  let fixture: ComponentFixture<RickAndMortyMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickAndMortyMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RickAndMortyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
