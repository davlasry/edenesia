import { NgModule } from '@angular/core';

import { AppDefaultRoutingModule } from './app-default-routing.module';
import { AppDefaultComponent } from './app-default.component';
import { HeaderComponent } from './layout/header/header.component';
import { TripsComponent } from './components/trips/trips.component';
import { TripComponent } from './components/trip/trip.component';
import { SearchComponent } from './search/search/search.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchResultComponent } from './search/search-result/search-result.component';
import { MainActivitiesComponent } from './home/main-activities/main-activities.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { ActivitySuggestionsComponent } from './components/activity-suggestions/activity-suggestions.component';
import { TripDetailsComponent } from './components/trip-details/trip-details.component';
import { RelatedItemsComponent } from './components/related-items/related-items.component';
import { RelatedItemComponent } from './components/related-item/related-item.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { PopularActivitiesComponent } from './home/popular-activities/popular-activities.component';
import { BenefitsComponent } from './home/benefits/benefits.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { AboutCtaComponent } from './about/about-cta/about-cta.component';
import { AboutSupportComponent } from './about/about-support/about-support.component';
import { ContactComponent } from './support/contact/contact.component';
import { ContactInfoComponent } from './support/contact-info/contact-info.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { WishlistHomeComponent } from './wishlist/wishlist-home/wishlist-home.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsletterSubscribeComponent } from './components/newsletter-subscribe/newsletter-subscribe.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SlideshowComponent } from './home/slideshow/slideshow.component';
import { DestinationsComponent } from './home/destinations/destinations.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { GiftCardComponent } from './components/gift-card/gift-card.component';

@NgModule({
  declarations: [
    AppDefaultComponent,
    HeaderComponent,
    TripsComponent,
    TripComponent,
    SearchComponent,
    SearchResultsComponent,
    SearchResultComponent,
    MainActivitiesComponent,
    TestimonialsComponent,
    HomeMainComponent,
    PopularActivitiesComponent,
    ActivitySuggestionsComponent,
    TripDetailsComponent,
    RelatedItemsComponent,
    RelatedItemComponent,
    FooterComponent,
    CategoriesComponent,
    BenefitsComponent,
    AboutUsComponent,
    AboutCtaComponent,
    AboutSupportComponent,
    ContactComponent,
    ContactInfoComponent,
    LoginComponent,
    SignUpComponent,
    WishlistHomeComponent,
    NewsletterSubscribeComponent,
    NotFoundComponent,
    SlideshowComponent,
    DestinationsComponent,
    GiftCardComponent
  ],
  imports: [
    CommonModule,
    AppDefaultRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class AppDefaultModule {}
