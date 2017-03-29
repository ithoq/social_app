import { async, TestBed } from '@angular/core/testing';
import { RightAsideCloserComponent } from './right-aside-closer.component';
describe('RightAsideCloserComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RightAsideCloserComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RightAsideCloserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/right-aside-closer/right-aside-closer.component.spec.js.map