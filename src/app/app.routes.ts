import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { LandPageComponent } from './land-page/land-page.component';
import { HomeComponent } from './home/home.component';
import { AnalisisComponent } from './analisis/analisis.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { GestioncontableComponent } from './gestioncontable/gestioncontable.component';
import { InventarioComponent } from './inventario/inventario.component';
import { NominaComponent } from './nomina/nomina.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PreciosComponent } from './precios/precios.component';
import { VentasComponent } from './ventas/ventas.component';
import { PasarelaPagosComponent } from './pasarela-pagos/pasarela-pagos.component';

export const routes: Routes = [

    {
        path: '', component: LandPageComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'home', component: HomeComponent
    }
    ,
    {
        path: 'analisis', component: AnalisisComponent
    }
    ,
    {
        path: 'empleados', component: EmpleadosComponent
    }
    ,
    {
        path: 'gestioncontable', component: GestioncontableComponent
    }
    ,
    {
        path: 'inventario', component: InventarioComponent
    }
    ,
    {
        path: 'nomina', component: NominaComponent
    }
    ,
    {
        path: 'perfil', component: PerfilComponent
    }
    ,
    {
        path: 'precios', component: PreciosComponent        
    }
    ,
    {
        path: 'ventas', component: VentasComponent
    }
    ,
    {
        path: 'pasarela-pagos', component: PasarelaPagosComponent
    }
    
];
