import { Routes } from '@angular/router';
import { MainLayout } from './core/layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard/dashboard').then(m => m.Dashboard) },
      { path: 'hr/employees', loadComponent: () => import('./features/hr/employee-list/employee-list').then(m => m.EmployeeList) },
      { path: 'hr/attendance', loadComponent: () => import('./features/hr/attendance/attendance').then(m => m.Attendance) },
      { path: 'production/work-orders', loadComponent: () => import('./features/production/work-orders/work-orders').then(m => m.WorkOrders) },
      { path: 'production/machines', loadComponent: () => import('./features/production/machines/machines').then(m => m.Machines) },
      { path: 'quality', loadComponent: () => import('./features/quality/qc-dashboard/qc-dashboard').then(m => m.QcDashboard) },
      { path: 'purchase/vendors', loadComponent: () => import('./features/purchase/vendors/vendors').then(m => m.Vendors) },
      { path: 'inventory/materials', loadComponent: () => import('./features/inventory/materials/materials').then(m => m.Materials) },
      { path: 'sales/orders', loadComponent: () => import('./features/sales/orders/orders').then(m => m.Orders) },
      { path: 'shipping/dispatch', loadComponent: () => import('./features/shipping/dispatch/dispatch').then(m => m.Dispatch) },
      { path: 'reports', loadComponent: () => import('./features/reports/reports/reports').then(m => m.Reports) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];
