import { Component, OnInit } from '@angular/core';
import {MediumToPasswordResetPromptService} from '../../services/medium-to-password-reset-prompt.service';

@Component({
  selector: 'sa-password-reset-prompt',
  templateUrl: './password-reset-prompt.component.html',
  styleUrls: ['./password-reset-prompt.component.css']
})
export class PasswordResetPromptComponent implements OnInit {
  public email:any;
  constructor(private mediumToPasswordResetPromptService : MediumToPasswordResetPromptService) {
    this.email = mediumToPasswordResetPromptService.getEmail();
  }

  ngOnInit() {
  }

}
