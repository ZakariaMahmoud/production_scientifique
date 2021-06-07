import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { ProfComponent } from 'src/app/pages/prof/prof.component';
import { DoctorantComponent } from 'src/app/pages/doctorant/doctorant.component';
import { AuthorsComponent } from 'src/app/pages/authors/authors.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    {path:'prof',component: ProfComponent},
    {path:'phd_student',component: DoctorantComponent},
    {path:'authors',component: AuthorsComponent},
];
