<template>
<div>
  <h1 class="header-title">Schedule</h1>
  <div class="container">
    <FullCalendar :options="calendarOptions" />
  </div>
</div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";

export default {
  name: "Schedule",
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin ],
        initialView: "dayGridMonth",
      },
    };
  },
};
</script>
