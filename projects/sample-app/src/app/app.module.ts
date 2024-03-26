import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  MasTextInputModule,
  MasInputDropdownModule,
  MasSelectModule,
  MasButtonModule,
  MasRadioButtonModule,
  MasToggleButtonModule,
  MasTagModule,
  MasLinkModule,
  MasChipModule,
  MasBadgeModule,
  MasLabelModule,
  MasHelperModule,
  MasErrorModule,
  MasNavigationBarModule,
  MasDividerModule,
  MasTabModule,
} from '@masoni/components/dist';
import { LoginComponent } from './views/login/login.component';
import { DefaultLayoutComponent } from './containers/default-layout.component';
import { FormComponent } from './views/form/form.component';
import { SettingComponent } from './views/setting/setting.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, FormComponent, SettingComponent, DefaultLayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MasTextInputModule,
    MasInputDropdownModule,
    MasSelectModule,
    MasButtonModule,
    MasRadioButtonModule,
    MasToggleButtonModule,
    MasTagModule,
    MasLinkModule,
    MasChipModule,
    MasBadgeModule,
    MasLabelModule,
    MasHelperModule,
    MasErrorModule,
    MasNavigationBarModule,
    MasDividerModule,
    MasTabModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
