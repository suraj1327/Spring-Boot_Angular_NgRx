import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {StoreModule} from'@ngrx/store';
import {ErrorHandler} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { PostDataComponent } from './post-data/post-data.component';

import { AppRoutingModule } from './app.routes';
import { HotelDataComponent } from './hotel-data/hotel-data.component';
import { roomReducer } from './reducers/room.reducer';
import { PipeCollectionPipe } from './pipes/pipe-collection.pipe';
import { ChangeTextDirective } from './directives/change-text.directive';
import { EffectsModule } from '@ngrx/effects';
import { RoomDetailsEffects } from './effects/room-details.effects';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { UserEffects } from './user.effects';
import  {HttpIntercept} from './http-interceptor';
import { ErrorHandlerService } from './error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    PostDataComponent,
    HotelDataComponent,
    PipeCollectionPipe,
    ChangeTextDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({room:roomReducer}),
    EffectsModule.forRoot([RoomDetailsEffects, UserEffects]),
    StoreModule.forRoot(reducers, {
      metaReducers, 
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [AppService,{
     provide:HTTP_INTERCEPTORS,useClass:HttpIntercept,multi:true
  },{
    provide:ErrorHandler,useClass:ErrorHandlerService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
