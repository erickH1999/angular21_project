import { Routes } from '@angular/router';
import { AddEmployee } from './add-employee/add-employee';
import { DataBinding } from './data-binding/data-binding';
import { EmployeeList } from './employee-list/employee-list';
import { NotFound } from './not-found/not-found';
import { Signals } from './signals/signals';
import { Controlflow } from './control-flow/controlflow';
import { AttributeDirective } from './attribute-directive/attribute-directive';
import { ReactiveForms } from './reactive-forms/reactive-forms';
import { Pipes } from './pipes/pipes';
import { SignalForms } from './signal-forms/signal-forms';
import { LifeCycle } from './life-cycle/life-cycle';
import { GetApi } from './get-api/get-api';
import { ServiceTest } from './service-test/service-test';
import { Login } from './login/login';
import { Layout } from './layout/layout';

export const routes: Routes = [

    //route that will display if a user navigates to a non-existent URL


    //default route
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },

    {
        path: 'login',
        component: Login,
    },

    {
        path: '',
        component: Layout,
        // all the child routes will be displayed inside the <router-outlet> of the Layout component
        children: [

            {
                path: 'add-employee',
                component: AddEmployee,
            },

            {
                path: 'data-binding',
                component: DataBinding,
            },

            {
                path: 'employee-list',
                component: EmployeeList,
            },

            {
                path: 'signals',
                component: Signals,
            },

            {
                path: 'control-flow',
                component: Controlflow,
            },

            {
                path: 'attribute-directive',
                component: AttributeDirective,
            },

            {
                path: 'reactive-forms',
                component: ReactiveForms,
            },

            {
                path: 'pipes',
                component: Pipes,
            },

            {
                path: 'signal-forms',
                component: SignalForms,
            },

            {
                path: 'life-cycle',
                component: LifeCycle,
            },

            {
                path: 'get-api',
                component: GetApi,
            },

            {
                path: 'service-test',
                component: ServiceTest,
            },
        ]
    },





    //route for when you enter an incorrect/false route
    {
        path: '**',
        component: NotFound
    },

];
