import { Routes } from '@angular/router';
import { AddEmployee } from './add-employee/add-employee';
import { DataBinding } from './data-binding/data-binding';
import { EmployeeList } from './employee-list/employee-list';
import { NotFound } from './not-found/not-found';
import { Signals } from './signals/signals';
import { Controlflow } from './control-flow/controlflow';
import { AttributeDirective } from './attribute-directive/attribute-directive';

export const routes: Routes = [

//route that will display if a user navigates to a non-existent URL


    //default route
{
    path:'',
    redirectTo: 'data-binding',
    pathMatch: 'full'
},


{
    path:'add-employee',
    component:AddEmployee,
}, 

{
    path:'data-binding',
    component: DataBinding,
}, 

{
    path:'employee-list',
    component:EmployeeList,
}, 

{
    path:'signals',
    component:Signals,
}, 

{
    path:'control-flow',
    component:Controlflow,
}, 

{
    path:'attribute-directive',
    component:AttributeDirective,
}, 

//route for when you enter an incorrect/false route
{
    path: '**',
    component: NotFound
},

];
