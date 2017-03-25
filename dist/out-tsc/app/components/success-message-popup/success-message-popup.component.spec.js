import { async, TestBed } from '@angular/core/testing';
import { SuccessMessagePopupComponent } from './success-message-popup.component';
describe('SuccessMessagePopupComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SuccessMessagePopupComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SuccessMessagePopupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/nomantufail/workspace/php/coding-pixel/social_app/dev/src/app/components/success-message-popup/success-message-popup.component.spec.js.map