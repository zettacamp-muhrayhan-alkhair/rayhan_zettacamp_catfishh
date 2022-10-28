import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { UserCardComponent } from './user-list/user-card/user-card.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    UserManagementComponent,
    UserListComponent,
    UserCreationComponent,
    UserCardComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,

    // NgxJdenticonModule

    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    UserManagementComponent,
    UserListComponent,
    UserCreationComponent,
    UserCardComponent,
  ],
})
export class UserManagementModule {}