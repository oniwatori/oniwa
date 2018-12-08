import { NgModule } from '@angular/core';

import { ThemeModule } from '../../layouts/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomSelectorComponent } from './rooms/room-selector/room-selector.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component';
import { TeamComponent } from './team/team.component';
import { KittenComponent } from './kitten/kitten.component';
import { SecurityCamerasComponent } from './security-cameras/security-cameras.component';
import { WeatherComponent } from './weather/weather.component';
import { PlayerComponent } from './rooms/player/player.component';
import { GreetingComponent } from './greeting/greeting.component';
import { OniwaSharedModule } from 'app/shared';

@NgModule({
    imports: [OniwaSharedModule, ThemeModule],
    declarations: [
        DashboardComponent,
        StatusCardComponent,
        TemperatureDraggerComponent,
        ContactsComponent,
        RoomSelectorComponent,
        TemperatureComponent,
        RoomsComponent,
        TeamComponent,
        KittenComponent,
        SecurityCamerasComponent,
        WeatherComponent,
        PlayerComponent,
        GreetingComponent
    ]
})
export class DashboardModule {}
