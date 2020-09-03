import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ClientsComponent } from './clients/clients.component';
import { PriceComponent } from './price/price.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Home', component: HeaderComponent},
  {path: 'About', component: IntroComponent},
  {path: 'Services', component: ContentComponent},
  {path: 'Gallery', component: GalleryComponent},
  {path: 'Testimonials', component: TestimonialsComponent},
  {path: 'Clients', component: ClientsComponent},
  {path: 'Pricing', component: PriceComponent},
  {path: 'Blog', component: BlogComponent},
  {path: 'Articale/:id', component: ArticleComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
