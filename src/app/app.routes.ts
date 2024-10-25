import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { DisplayUserComponent } from './components/data/user/display-user/display-user.component';
import { AddUserComponent } from './components/data/user/add-user/add-user.component';
import { ShowCategoryComponent } from './components/data/tour-package/package-category/show-category/show-category.component';
import { UpdateCategoryComponent } from './components/data/tour-package/package-category/update-category/update-category.component';
import { ShowSubCategoryComponent } from './components/data/tour-package/package-sub-category/show-sub-category/show-sub-category.component';
import { AddSubCategoryComponent } from './components/data/tour-package/package-sub-category/add-sub-category/add-sub-category.component';
import { UpdateSubCategoryComponent } from './components/data/tour-package/package-sub-category/update-sub-category/update-sub-category.component';

import { CountryListComponent } from './components/data/Country/country-list/country-list.component';
import { CountryAddComponent } from './components/data/Country/country-add/country-add.component';
import { CountryEditComponent } from './components/data/Country/country-edit/country-edit.component';

import { StateListComponent } from './components/data/State/state-list/state-list.component';
import { StateCreateComponent } from './components/data/State/state-create/state-create.component';
import { StateEditComponent } from './components/data/State/state-edit/state-edit.component';

import { CostEstimateFormComponentComponent } from './components/data/PackageBudget/cost-estimate-form-component/cost-estimate-form-component.component';
import { GetPackageDetailsComponent } from './components/data/PackageBudget/get-package-details/get-package-details.component';
import { TourVoucherComponent } from './components/data/TourVoucher/tour-voucher/tour-voucher.component';
import { FacilityListComponent } from './components/data/Facilities/facility-list/facility-list.component';
import { FacilityCreateComponent } from './components/data/Facilities/facility-create/facility-create.component';
import { FacilityEditComponent } from './components/data/Facilities/facility-edit/facility-edit.component';
import { FacilityDeleteComponent } from './components/data/Facilities/facility-delete/facility-delete.component';
import { AddSeatsComponent } from './components/data/Transport/seats/add-seats/add-seats.component';
import { ViewSeatsComponent } from './components/data/Transport/seats/view-seats/view-seats.component';
import { EditSeatsComponent } from './components/data/Transport/seats/edit-seats/edit-seats.component';
import { DeleteSeatsComponent } from './components/data/Transport/seats/delete-seats/delete-seats.component';
import { ViewTransportationTypesComponent } from './components/data/Transport/transportationType/view-transportation-type/view-transportation-type.component';
import { AddTransportationTypeComponent } from './components/data/Transport/transportationType/add-transportation-type/add-transportation-type.component';
import { EditTransportationTypeComponent } from './components/data/Transport/transportationType/edit-transportation-type/edit-transportation-type.component';
import { DeleteTransportationTypeComponent } from './components/data/Transport/transportationType/delete-transportation-type/delete-transportation-type.component';
import { ViewTransportProvidersComponent } from './components/data/Transport/transportProvider/view-transport-provider/view-transport-provider.component';
import { AddTransportProviderComponent } from './components/data/Transport/transportProvider/add-transport-provider/add-transport-provider.component';
import { EditTransportProviderComponent } from './components/data/Transport/transportProvider/edit-transport-provider/edit-transport-provider.component';
import { DeleteTransportProviderComponent } from './components/data/Transport/transportProvider/delete-transport-provider/delete-transport-provider.component';
import { ShowMealtypeComponent } from './components/data/mealType/show-mealtype/show-mealtype.component';
import { AddMealTypeComponent } from './components/data/mealType/add-mealtype/add-mealtype.component';
import { UpdateMealTypeComponent } from './components/data/mealType/update-mealtype/update-mealtype.component';
import { ShowFoodItemsComponent } from './components/data/foodItems/show-food-items/show-food-items.component';
import { AddFoodItemComponent } from './components/data/foodItems/add-fooditems/add-fooditems.component';
import { UpdateFoodItemComponent } from './components/data/foodItems/update-fooditems/update-fooditems.component';
import { ShowPackagefooditemsComponent } from './components/data/packagefooditem/show-packagefooditems/show-packagefooditems.component';
import { AddPackagefooditemsComponent } from './components/data/packagefooditem/add-packagefooditems/add-packagefooditems.component';
import { AddPackageTransportationComponent } from './components/data/Transport/packageTransportation/add-package-transportation/add-package-transportation.component';
import { ViewPackageTransportationComponent } from './components/data/Transport/packageTransportation/view-package-transportation/view-package-transportation.component';
import { AddLocationComponent } from './components/data/Location/location/add-location/add-location.component';
import { LocationListComponent } from './components/data/Location/location/location-list/location-list.component';
import { EditLocationComponent } from './components/data/Location/location/edit-location/edit-location.component';
import { LocationGallerylistComponent } from './components/data/Location/location-gallery/location-gallerylist/location-gallerylist.component';
import { AddLocationGalleryComponent } from './components/data/Location/location-gallery/add-location-gallery/add-location-gallery.component';
import { UpdateLocationgalleryComponent } from './components/data/Location/location-gallery/update-locationgallery/update-locationgallery.component';
import { ViewTransportationComponent } from './components/data/Transport/transportation/view-transportation/view-transportation.component';
import { AddTransportationComponent } from './components/data/Transport/transportation/add-transportation/add-transportation.component';
import { EditTransportationComponent } from './components/data/Transport/transportation/edit-transportation/edit-transportation.component';
import { ViewTransportationCatagory } from './components/data/Transport/transportationCatagory/view-transportation-catagory/view-transportation-catagory.component';
import { AddTransportationCatagoryComponent } from './components/data/Transport/transportationCatagory/add-transportation-catagory/add-transportation-catagory.component';
import { EditTransportationCatagoryComponent } from './components/data/Transport/transportationCatagory/edit-transportation-catagory/edit-transportation-catagory.component';
import { CreateUrlComponent } from './components/data/UrlService/create-url/create-url.component';
import { UrlListComponent } from './components/data/UrlService/url-list/url-list.component';
import { ViewRoomComponent } from './components/data/room/view-room/view-room.component';
import { AddRoomComponent } from './components/data/room/add-room/add-room.component';
import { EditRoomComponent } from './components/data/room/edit-room/edit-room.component';
import { GetAccommodationComponent } from './components/data/package-accommodation/get-accommodation/get-accommodation.component';
import { ViewPackageIncludesComponent } from './components/data/PackageIncludes/view-package-includes/view-package-includes.component';
import { UpdatePackageIncludesComponent } from './components/data/PackageIncludes/update-package-includes/update-package-includes.component';
import { ViewPackageExcludesComponent } from './components/data/PackageExcludes/view-package-excludes/view-package-excludes.component';
import { UpdatePackageExcludesComponent } from './components/data/PackageExcludes/update-package-excludes/update-package-excludes.component';
import { PackageDisplayComponent } from './components/data/tour-package/packages/show-packages/show-packages.component';
import { AddPackageComponent } from './components/data/tour-package/packages/add-package/add-package.component';
import { DisplayGalleryComponent } from './components/data/tour-package/package-gallery/display-gallery/display-gallery.component';
import { DisplayDetailsComponent } from './components/data/tour-package/package-details/display-details/display-details.component';
import { AddDetailsComponent } from './components/data/tour-package/package-details/add-details/add-details.component';
import { AddGalleryComponent } from './components/data/tour-package/package-gallery/add-gallery/add-gallery.component';
import { DisplayScheduleComponent } from './components/data/tour-package/package-schedules/display-schedule/display-schedule.component';
import { UpdateScheduleComponent } from './components/data/tour-package/package-schedules/update-schedule/update-schedule.component';
import { AddCategoryComponent } from './components/data/tour-package/package-category/add-category/add-category.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: DisplayUserComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'categories', component: ShowCategoryComponent },
  { path: 'add/category', component: AddCategoryComponent },
  { path: 'update/category/:id', component: UpdateCategoryComponent },
  { path: 'sub/categories', component: ShowSubCategoryComponent },
  { path: 'add/sub/category', component: AddSubCategoryComponent },
  { path: 'update/sub/category/:id', component: UpdateSubCategoryComponent },
  { path: 'packages', component: PackageDisplayComponent },
  { path: 'add/package', component: AddPackageComponent },
  { path: 'galleries/:packageId', component: DisplayGalleryComponent },
  { path: 'package/details/:packageId', component: DisplayDetailsComponent },
  { path: 'add/package/details/:packageId', component: AddDetailsComponent },
  {
    path: 'get/package/gallery/:packageId',
    component: DisplayGalleryComponent,
  },
  { path: 'add/gallery/:packageId', component: AddGalleryComponent },
  { path: 'package/schedules/:packageId', component: DisplayScheduleComponent },
  { path: 'edit/schedule/:packageId', component: UpdateScheduleComponent },
  {
    path: 'packageincludes/add',
    loadComponent: () =>
      import(
        '../app/components/data/PackageIncludes/add-package-includes/add-package-includes.component'
      ).then((m) => m.AddPackageIncludesComponent),
  },

  {
    path: 'packageincludes/get/:packageId',
    component: ViewPackageIncludesComponent,
  },

  {
    path: 'packageincludes/update/:packageId',
    component: UpdatePackageIncludesComponent,
  },
  {
    path: 'packageexcludes/get/:packageId',
    component: ViewPackageExcludesComponent,
  },
  {
    path: 'packageexcludes/add',
    loadComponent: () =>
      import(
        '../app/components/data/PackageExcludes/add-package-excludes/add-package-excludes.component'
      ).then((m) => m.AddPackageExcludesComponent),
  },

  {
    path: 'packageexcludes/update/:packageId',
    component: UpdatePackageExcludesComponent,
  },

  { path: 'countries', component: CountryListComponent }, // GET
  { path: 'countries/add', component: CountryAddComponent }, // POST
  { path: 'countries/edit/:id', component: CountryEditComponent }, // PUT

  { path: 'states', component: StateListComponent },
  { path: 'states/add', component: StateCreateComponent },
  { path: 'states/edit/:id', component: StateEditComponent },

  { path: 'package/addBudget', component: CostEstimateFormComponentComponent },
  { path: 'package/addBudget/:id', component: GetPackageDetailsComponent },
  { path: 'package/voucher', component: TourVoucherComponent },
  { path: 'schedule/edit/:id', component: UpdateScheduleComponent },

  { path: 'facility', component: FacilityListComponent },
  { path: 'api/facility/add', component: FacilityCreateComponent },
  { path: 'api/facility/edit/:id', component: FacilityEditComponent },

  { path: 'add-seats', component: AddSeatsComponent },
  { path: 'view-seats', component: ViewSeatsComponent },
  { path: 'edit-seats/:id', component: EditSeatsComponent }, // Dynamic route for editing seat by ID
  { path: 'delete-seats/:id', component: DeleteSeatsComponent }, // Dynamic route for deleting seat by ID

  { path: 'transportation-types', component: ViewTransportationTypesComponent },
  {
    path: 'transportation-types/add',
    component: AddTransportationTypeComponent,
  },
  {
    path: 'transportation-types/edit/:id',
    component: EditTransportationTypeComponent,
  },
  { path: 'delete-type/:id', component: DeleteTransportationTypeComponent },

  { path: 'transport-providers', component: ViewTransportProvidersComponent },
  { path: 'transport-providers/add', component: AddTransportProviderComponent },
  {
    path: 'transport-providers/edit/:id',
    component: EditTransportProviderComponent,
  },
  {
    path: 'transport-providers/delete/:id',
    component: DeleteTransportProviderComponent,
  },

  { path: 'mealTypes', component: ShowMealtypeComponent },
  { path: 'MealTypes/add', component: AddMealTypeComponent },
  { path: 'MealTypes/edit/:id', component: UpdateMealTypeComponent },

  { path: 'foodItems', component: ShowFoodItemsComponent },
  { path: 'food-items', component: AddFoodItemComponent },
  { path: 'FoodItems/edit/:id', component: UpdateFoodItemComponent },
  { path: 'FoodItems/add', component: AddFoodItemComponent },

  { path: 'packagefooditem/get', component: ShowPackagefooditemsComponent },
  { path: 'packagefood/add/:id', component: AddPackagefooditemsComponent },
  { path: 'packagefood/add', component: AddPackagefooditemsComponent },

  {
    path: 'package/transportation',
    component: ViewPackageTransportationComponent,
  },
  {
    path: 'package/transportation/add',
    component: AddPackageTransportationComponent,
  },
  {
    path: 'package/transportation/add/:id',
    component: AddPackageTransportationComponent,
  },

  { path: 'location/add', component: AddLocationComponent },
  { path: 'location', component: LocationListComponent },
  { path: 'location/edit/:id', component: EditLocationComponent },
  { path: '', redirectTo: '/locations', pathMatch: 'full' },
  { path: 'LocationGallery', component: LocationGallerylistComponent },
  { path: 'LocationGallery/add', component: AddLocationGalleryComponent },
  {
    path: 'LocationGallery/edit/:id',
    component: UpdateLocationgalleryComponent,
  },

  { path: 'api/Transportation/getAll', component: ViewTransportationComponent },
  { path: 'api/Transportation/add', component: AddTransportationComponent },
  {
    path: 'api/Transportation/update/:id',
    component: EditTransportationComponent,
  },

  {
    path: 'api/TransportationCatagory/get',
    component: ViewTransportationCatagory,
  }, // Route for viewing categories
  {
    path: 'api/TransportationCatagory/add',
    component: AddTransportationCatagoryComponent,
  }, // Route for adding a category

  {
    path: 'api/TransportationCatagory/update/:id',
    component: EditTransportationCatagoryComponent,
  }, // Route for editing a category

  { path: 'rooms', component: ViewRoomComponent },
  { path: 'add/room', component: AddRoomComponent },
  { path: 'update/room/:id', component: EditRoomComponent },

  {
    path: 'accommodations/add',
    loadComponent: () =>
      import(
        '../app/components/data/package-accommodation/package-accommodation/package-accommodation.component'
      ).then((m) => m.PackageAccommodationComponent),
  },
  {
    path: 'accommodations/get/:packageId',
    component: GetAccommodationComponent,
  },

  { path: 'url/add', component: CreateUrlComponent },
  { path: 'url/list', component: UrlListComponent },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
