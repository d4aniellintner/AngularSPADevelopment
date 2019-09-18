import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';
import { SkillContainerComponent } from './skills/skill-container/skill-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

@NgModule({
	declarations: [ AppComponent, ToolbarComponent, FooterComponent, SidemenuComponent, SkillContainerComponent ],
	imports: [ BrowserModule, AppRoutingModule, BrowserAnimationsModule, FlexLayoutModule, MaterialModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
