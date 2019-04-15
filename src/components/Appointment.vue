<template>
  <v-app>
    <v-navigation-drawer light class="white elevation-4" v-model="drawer" fixed app>
      <v-list dense>
        <v-container fluid style="padding: 0;">
          <v-avatar :tile="true" :size="90" color="transparent">
            <img src="../assets/logomiappgris.svg" alt="avatar">
          </v-avatar>
        </v-container>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon class="icon">calendar_today</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <router-link to="/Appointment">
              <v-list-tile-title class="nav-item">Appointment</v-list-tile-title>
            </router-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon class="icon">view_list</v-icon>
          </v-list-tile-action>
          <router-link to="/WaitList">
          <v-list-tile-content>
            <v-list-tile-title class="nav-item">WaitList</v-list-tile-title>
          </v-list-tile-content>
          </router-link>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon class="icon">person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <router-link to="/Profile">
              <v-list-tile-title class="nav-item">Profile</v-list-tile-title>
            </router-link>
          </v-list-tile-content>
        </v-list-tile>
  
        <v-list-tile @click="" class="hidden-sm-and-up">
          <v-list-tile-action>
            <v-icon class="icon">lock_open</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="" class="hidden-sm-and-up">
          <v-list-tile-action>
            <v-icon class="icon">lock</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="nav-bar" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-avatar :tile="true" :size="120" color="transparent">
        <img src="../assets/logomiaapp.svg" alt="avatar">
      </v-avatar>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <v-icon left>lock</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  
    <!-- Calendar Start Here -->
    <v-content>
      <v-layout>
        <v-flex>
          <v-sheet height="100vh">
            <!-- now is normally calculated by itself, but to keep the calendar in this date range to view events -->
            <v-calendar ref="calendar" :now="today" :value="today" color="primary" type="week">
              <!-- the events at the top (all-day) -->
              <template v-slot:dayHeadere="{ date }">
                      <template v-for="event in eventsMap[date]">
                        <!-- all day events don't have time -->
                        <div
                          v-if="!event.time"
                          :key="event.title"
                          class="my-event"
                          @click="open(event)"
                          v-html="event.title"
                        ></div>
</template>
          </template>
          <!-- the events at the bottom (timed) -->
<template v-slot:dayBody="{ date, timeToY, minutesToPixels }">
  <template v-for="event in eventsMap[date]">
                        <!-- timed events -->
                        <div
                          v-if="event.time"
                          :key="event.title"
                          :style="{ top: timeToY(event.time) + 'px', height: minutesToPixels(event.duration) + 'px' }"
                          class="my-event with-time"
                          @click="open(event)"
                          v-html="event.title"
                        ></div>
</template>
          </template>
        </v-calendar>
      </v-sheet>
    </v-flex>
  </v-layout>
  </v-content>

    <!-- Calendar Ends Here -->
  
    <v-footer light app>
      <span class="ma-auto">&copy; MiApp 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'Calendar',
    data: () => ({
      drawer: null,
      today: '2019-03-04',
      events: [{
          title: 'Weekly Meeting',
          date: '2019-01-07',
          time: '09:00',
          duration: 45
        },
        {
          title: 'Thomas\' Birthday',
          date: '2019-01-10'
        },
        {
          title: 'Mash Potatoes',
          date: '2019-01-09',
          time: '12:30',
          duration: 180
        }
      ]
    }),
    computed: {
      // convert the list of events into a map of lists keyed by date
      eventsMap() {
        const map = {}
        this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e))
        return map
      }
    },
    mounted() {
      this.$refs.calendar.scrollToTime('08:00')
    },
    methods: {
      open(event) {
        alert(event.title)
      }
    }
  }
</script>

<style>
  /* calendar styles */
  
  .my-event {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 2px;
    background-color: #1867c0;
    color: #ffffff;
    border: 1px solid #1867c0;
    font-size: 12px;
    padding: 3px;
    cursor: pointer;
    margin-bottom: 1px;
    left: 4px;
    margin-right: 8px;
    position: relative;
    &.with-time {
      position: absolute;
      right: 4px;
      margin-right: 0px;
    }
  }
  
  
  /*  */
  
  .nav-bar {
    background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);
  }
  
  .icon {
    color: #93278f !important;
  }
  
  .nav-item {
    color: #29abe2;
    font-weight: 800;
  }
  
  .patient-card {
    background: white;
    -webkit-box-shadow: 0 8px 6px -6px black;
    -moz-box-shadow: 0 8px 6px -6px black;
    box-shadow: 0 8px 6px -6px black;
  }
</style>
