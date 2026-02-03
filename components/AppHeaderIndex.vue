<template>
  <div>
    <v-app-bar :elevation="0">
      <v-app-bar-nav-icon class="d-flex d-md-none" variant="text" @click.stop="drawer = !drawer" />
      <template #append>
        <NuxtLink v-for="(page, index) in pages" :key="index" class="d-none d-md-block" :to="page.to">
          <v-btn>{{ page.title }}</v-btn>
        </NuxtLink>
      </template>
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
  data: () => ({
    drawer: false,
    pages: [
      { title: 'VENUE', to: 'https://www.otsu-dengei.jp/' },
      { title: 'BLOG', to: 'https://note.com/kanrk' },
      { title: 'POLICIES', to: '/policies' },
      { title: 'ABOUT', to: '/about' },
    ],
  }),
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');

.v-toolbar {
  background: transparent !important;
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

a {
  text-decoration: none;
  color: inherit;
}

button {
  font-family: 'Questrial', sans-serif;
  color: #0A1C4C;
}

.v-app-bar-nav-icon {
  color: #0A1C4C !important;
}

</style>
