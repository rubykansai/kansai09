<template>
  <div>
    <v-app-bar :elevation="0" :class="{ 'app-bar--content': !isHome }">
      <NuxtLink v-if="!isHome" class="brand-link" to="/" aria-label="関西Ruby会議09 Home">
        <v-img :src="logoSrc" alt="関西Ruby会議09" width="148" height="46" class="brand-logo" />
      </NuxtLink>
      <v-spacer />
      <NuxtLink v-for="(page, index) in pages" :key="index" class="d-none d-md-block" :to="page.to">
        <v-btn>{{ page.title }}</v-btn>
      </NuxtLink>
      <v-app-bar-nav-icon class="d-flex d-md-none" variant="text" @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <NuxtLink v-for="(page, index) in pages" :key="index" :to="page.to">
          <v-list-item>{{ page.title }}</v-list-item>
        </NuxtLink>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  setup() {
    const { app: { baseURL } } = useRuntimeConfig()
    const logoSrc = `${baseURL}logo-horizontal.png`

    return {
      logoSrc,
    }
  },
  data: () => ({
    drawer: false,
    pages: [
      { title: 'SPEAKERS', to: '/speakers' },
      { title: 'SCHEDULE', to: '/schedule' },
      { title: 'EVENTS', to: '/events' },
      { title: 'BLOG', to: 'https://note.com/kanrk' },
      { title: 'SPONSORS', to: '/sponsors' },
      { title: 'JOBS', to: '/jobs' },
      { title: 'VENUE', to: '/venue' },
      { title: 'POLICIES', to: '/policies' },
      { title: 'ABOUT', to: '/about' },
      { title: 'GOODIES', to: '/goodies' },
    ],
  }),
  computed: {
    isHome() {
      return this.$route.path === '/'
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');

.v-toolbar {
  background: transparent !important;
}

.v-toolbar.app-bar--content {
  background-color: #041D4F !important;
}

.v-navigation-drawer {
  background-color: #FFFFFF !important;
  border-left: 2px solid #0A1C4C !important;
}

.v-list {
  padding-top: 2rem;
}

.v-list-item {
  font-family: 'Questrial', sans-serif;
  color: #0A1C4C !important;
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  padding: 1.2rem 1.5rem;
  transition: all 0.3s ease;
}

.v-list-item:hover {
  background-color: rgba(10, 28, 76, 0.05);
  padding-left: 2rem;
}

.brand-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  margin-left: 1rem;
  padding: 0.25rem 0.45rem;
  text-decoration: none;
}

.brand-logo {
  display: block;
  max-width: 38vw;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  font-family: 'Questrial', sans-serif;
  color: #0A1C4C;
}

.app-bar--content button {
  color: #ffffff !important;
}

.v-app-bar-nav-icon {
  color: #0A1C4C !important;
}

.app-bar--content .v-app-bar-nav-icon {
  color: #ffffff !important;
}

@media screen and (max-width: 599px) {
  .brand-link {
    margin-left: 0.75rem;
  }
}

</style>
