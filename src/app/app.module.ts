import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutComponent } from "./about/about.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { ParallaxDirective } from "./parallax.directive";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    HomeComponent,
    ParallaxDirective
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
