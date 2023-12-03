import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    headerToolbar: {
      "left": "prev,next today",
      "center": "title",
      "right": "dayGridMonth,dayGridWeek,dayGridDay"
    },
    events: [
      { title: 'event 1', date: '2023-12-03' },

      { title: 'event 2', date: '2023-12-04' }
    ]
  };
}
