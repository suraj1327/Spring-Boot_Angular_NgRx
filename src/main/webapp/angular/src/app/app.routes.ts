import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HotelDataComponent } from './hotel-data/hotel-data.component';
import { PostDataComponent } from './post-data/post-data.component';

const routes:Routes= [
      {
        path: '', pathMatch:'full', redirectTo:'/hotel'
      },
        {
            path:'hotel',
            component:HotelDataComponent
        },
        
        {
            path: 'posts',
            component: PostDataComponent
        },
        {
            path: 'person',
            loadChildren:()=>import('./persons/persons.module').then(m=>m.PersonsModule)
        }
    ]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{

}