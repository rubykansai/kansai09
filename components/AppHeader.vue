<template>
  <div>
    <v-app-bar :elevation="0">
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
      { title: 'VENUE', to: 'https://www.otsu-dengei.jp/' },
      { title: 'BLOG', to: 'https://note.com/kanrk' },
      { title: 'EVENTS', to: '/events' },
      { title: 'SPEAKERS', to: '/speakers' },
      { title: 'SPONSORS', to: '/sponsors' },
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
.v-toolbar {
  background-color: #041D4F !important;
}

@media screen and (min-width:600px) {
  .v-toolbar {
    border-bottom: #fff solid 1px !important;
  }
}

.v-navigation-drawer {
  background-color: #041D4F !important;
}

.brand-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  margin-left: 1rem;
  text-decoration: none;
}

.brand-logo {
  display: block;
  max-width: 38vw;
}

.v-list-item, a {
  font-family: 'Kumbh Sans', serif;
  color: #fff;
}

button {
  font-family: 'Kumbh Sans', serif;
  color: #fff;
}

@media screen and (max-width: 599px) {
  .brand-link {
    margin-left: 0.75rem;
  }
}

</style>
