import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeixesPage } from './peixes.page';

describe('PeixesPage', () => {
  let component: PeixesPage;
  let fixture: ComponentFixture<PeixesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeixesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeixesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
