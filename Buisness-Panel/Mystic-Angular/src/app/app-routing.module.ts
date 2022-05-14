import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  // Auth12
  { path: 'register', loadChildren: () => import('./components/pages/form/formwizard/formwizard.module').then(m => m.FormwizardModule) },
  { path: 'login', loadChildren: () => import('./components/pages/prebuilt-pages/defaultlogin/defaultlogin.module').then(m => m.DefaultloginModule) },
  // Dashboard
  { path: '', loadChildren: () => import('./components/pages/prebuilt-pages/defaultlogin/defaultlogin.module').then(m => m.DefaultloginModule) },
  { path: 'dashboard/web-analytics', loadChildren: () => import('./components/pages/dashboard/webanalytics/webanalytics.module').then(m => m.WebanalyticsModule) },
  { path: 'dashboard/social-media', loadChildren: () => import('./components/pages/dashboard/socialmedia/socialmedia.module').then(m => m.SocialmediaModule) },
  { path: 'dashboard/project-management', loadChildren: () => import('./components/pages/dashboard/projectmanagement/projectmanagement.module').then(m => m.ProjectmanagementModule) },
  { path: 'dashboard/client-management', loadChildren: () => import('./components/pages/dashboard/clientmanagement/clientmanagement.module').then(m => m.ClientmanagementModule) },
  { path: 'dashboard/menu-list', loadChildren: () => import('./components/pages/dashboard/menulist/menulist.module').then(m => m.MenulistModule) },
  { path: 'dashboard/menu-grid', loadChildren: () => import('./components/pages/dashboard/menugrid/menugrid.module').then(m => m.MenugridModule) },
  { path: 'dashboard/orders', loadChildren: () => import('./components/pages/dashboard/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'dashboard/invoice', loadChildren: () => import('./components/pages/dashboard/invoice/invoice.module').then(m => m.InvoiceModule) },
  { path: 'dashboard/invoice-list', loadChildren: () => import('./components/pages/dashboard/invoice-list/invoice-list.module').then(m => m.InvoiceListModule) },
  { path: 'dashboard/add-offer', loadChildren: () => import('./components/pages/dashboard/add-offer/add-offer.module').then(m => m.AddOfferModule) },
  { path: 'dashboard/offer-detail', loadChildren: () => import('./components/pages/dashboard/offer-detail/offer-detail.module').then(m => m.OfferDetailModule) },
  { path: 'dashboard/customers-review', loadChildren: () => import('./components/pages/dashboard/customer-review/customer-review.module').then(m => m.CustomerReviewModule) },
  { path: 'dashboard/customers-list', loadChildren: () => import('./components/pages/dashboard/customer-list/customer-list.module').then(m => m.CustomerListModule) },
  { path: 'dashboard/food-feed', loadChildren: () => import('./components/pages/dashboard/food-feed/food-feed.module').then(m => m.FoodFeedModule) },
  { path: 'dashboard/profile', loadChildren: () => import('./components/pages/dashboard/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'dashboard/offer-history', loadChildren: () => import('./components/pages/dashboard/offer-history/offer-history.module').then(m => m.OfferHistoryModule) },
  { path: 'dashboard/account-settings', loadChildren: () => import('./components/pages/dashboard/account-settings/account-settings.module').then(m => m.AccountSettingsModule) },
  // Widgets
  { path: 'widgets', loadChildren: () => import('./components/pages/widgets/widgets.module').then(m => m.WidgetsModule) },
  // Basic Ui Elements
  { path: 'ui-basic/accordions', loadChildren: () => import('./components/pages/ui-basic/accordions/accordions.module').then(m => m.AccordionsModule) },
  { path: 'ui-basic/alerts', loadChildren: () => import('./components/pages/ui-basic/alerts/alerts.module').then(m => m.AlertsModule) },
  { path: 'ui-basic/buttons', loadChildren: () => import('./components/pages/ui-basic/buttons/buttons.module').then(m => m.ButtonsModule) },
  { path: 'ui-basic/breadcrumbs', loadChildren: () => import('./components/pages/ui-basic/breadcrumbs/breadcrumbs.module').then(m => m.BreadcrumbsModule) },
  { path: 'ui-basic/badges', loadChildren: () => import('./components/pages/ui-basic/badges/badges.module').then(m => m.BadgesModule) },
  { path: 'ui-basic/cards', loadChildren: () => import('./components/pages/ui-basic/cards/cards.module').then(m => m.CardsModule) },
  { path: 'ui-basic/progress-bars', loadChildren: () => import('./components/pages/ui-basic/progressbars/progressbars.module').then(m => m.ProgressbarsModule) },
  { path: 'ui-basic/preloaders', loadChildren: () => import('./components/pages/ui-basic/preloaders/preloaders.module').then(m => m.PreloadersModule) },
  { path: 'ui-basic/pagination', loadChildren: () => import('./components/pages/ui-basic/pagination/pagination.module').then(m => m.PaginationModule) },
  { path: 'ui-basic/tabs', loadChildren: () => import('./components/pages/ui-basic/tabs/tabs.module').then(m => m.TabsModule) },
  { path: 'ui-basic/typography', loadChildren: () => import('./components/pages/ui-basic/typography/typography.module').then(m => m.TypographyModule) },
  // Advance Ui Elements
  { path: 'ui-advance/draggables', loadChildren: () => import('./components/pages/ui-advance/draggables/draggables.module').then(m => m.DraggablesModule) },
  { path: 'ui-advance/sliders', loadChildren: () => import('./components/pages/ui-advance/sliders/sliders.module').then(m => m.SlidersModule) },
  { path: 'ui-advance/modals', loadChildren: () => import('./components/pages/ui-advance/modals/modals.module').then(m => m.ModalsModule) },
  { path: 'ui-advance/rating', loadChildren: () => import('./components/pages/ui-advance/ratings/ratings.module').then(m => m.RatingsModule) },
  { path: 'ui-advance/tour', loadChildren: () => import('./components/pages/ui-advance/tour/tour.module').then(m => m.TourModule) },
  { path: 'ui-advance/cropper', loadChildren: () => import('./components/pages/ui-advance/cropper/cropper.module').then(m => m.CropperModule) },
  { path: 'ui-advance/range-slider', loadChildren: () => import('./components/pages/ui-advance/rangeslider/rangeslider.module').then(m => m.RangesliderModule) },
  // Animations
  { path: 'animation', loadChildren: () => import('./components/pages/animation/animation.module').then(m => m.AnimationModule) },
  // Forms
  { path: 'form/form-elements', loadChildren: () => import('./components/pages/form/formelements/formelements.module').then(m => m.FormelementsModule) },
  { path: 'form/form-layout', loadChildren: () => import('./components/pages/form/formlayouts/formlayouts.module').then(m => m.FormlayoutsModule) },
  { path: 'form/form-validation', loadChildren: () => import('./components/pages/form/formvalidation/formvalidation.module').then(m => m.FormvalidationModule) },
  { path: 'form/form-wizard', loadChildren: () => import('./components/pages/form/formwizard/formwizard.module').then(m => m.FormwizardModule) },
  // Charts
  { path: 'charts/chartjs', loadChildren: () => import('./components/pages/charts/chartjs/chartjs.module').then(m => m.ChartjsModule) },
  { path: 'charts/google-charts', loadChildren: () => import('./components/pages/charts/googlechart/googlechart.module').then(m => m.GooglechartModule) },
  // Tables
  { path: 'tables/basic-tables', loadChildren: () => import('./components/pages/tables/basictable/basictable.module').then(m => m.BasictableModule) },
  { path: 'tables/data-tables', loadChildren: () => import('./components/pages/tables/datatable/datatable.module').then(m => m.DatatableModule) },
  // Popups
  { path: 'popups/sweet-alerts', loadChildren: () => import('./components/pages/popups/sweetalerts/sweetalerts.module').then(m => m.SweetalertsModule) },
  { path: 'popups/toast', loadChildren: () => import('./components/pages/popups/toast/toast.module').then(m => m.ToastModule) },
  // Icons
  { path: 'icons/fontawesome', loadChildren: () => import('./components/pages/icons/fontawesome/fontawesome.module').then(m => m.FontawesomeModule) },
  { path: 'icons/flaticons', loadChildren: () => import('./components/pages/icons/flaticons/flaticons.module').then(m => m.FlaticonsModule) },
  { path: 'icons/materialize', loadChildren: () => import('./components/pages/icons/materialize/materialize.module').then(m => m.MaterializeModule) },
  // Maps
  { path: 'maps/google-maps', loadChildren: () => import('./components/pages/maps/googlemaps/googlemaps.module').then(m => m.GooglemapsModule) },
  { path: 'maps/vector-maps', loadChildren: () => import('./components/pages/maps/vectormaps/vectormaps.module').then(m => m.VectormapsModule) },
  // Pages

  { path: 'prebuilt-pages/modal-login', loadChildren: () => import('./components/pages/prebuilt-pages/modallogin/modallogin.module').then(m => m.ModalloginModule) },
  { path: 'prebuilt-pages/default-register', loadChildren: () => import('./components/pages/prebuilt-pages/defaultregister/defaultregister.module').then(m => m.DefaultregisterModule) },
  { path: 'prebuilt-pages/modal-register', loadChildren: () => import('./components/pages/prebuilt-pages/modalregister/modalregister.module').then(m => m.ModalregisterModule) },
  { path: 'prebuilt-pages/lock-screen', loadChildren: () => import('./components/pages/prebuilt-pages/lockscreen/lockscreen.module').then(m => m.LockscreenModule) },
  { path: 'prebuilt-pages/coming-soon', loadChildren: () => import('./components/pages/prebuilt-pages/comingsoon/comingsoon.module').then(m => m.ComingsoonModule) },
  { path: 'prebuilt-pages/error', loadChildren: () => import('./components/pages/prebuilt-pages/error/error.module').then(m => m.ErrorModule) },
  { path: 'prebuilt-pages/faq', loadChildren: () => import('./components/pages/prebuilt-pages/faq/faq.module').then(m => m.FaqModule) },
  { path: 'prebuilt-pages/portfolio', loadChildren: () => import('./components/pages/prebuilt-pages/portfolio/portfolio.module').then(m => m.PortfolioModule) },
  { path: 'prebuilt-pages/user-profile', loadChildren: () => import('./components/pages/prebuilt-pages/userprofile/userprofile.module').then(m => m.UserprofileModule) },
  { path: 'prebuilt-pages/invoice', loadChildren: () => import('./components/pages/prebuilt-pages/invoice/invoice.module').then(m => m.InvoiceModule) },
  // Apps
  { path: 'apps/chat', loadChildren: () => import('./components/pages/apps/chat/chat.module').then(m => m.ChatModule) },
  { path: 'apps/email', loadChildren: () => import('./components/pages/apps/email/email.module').then(m => m.EmailModule) },
  { path: 'apps/to-do-list', loadChildren: () => import('./components/pages/apps/todolist/todolist.module').then(m => m.TodolistModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
