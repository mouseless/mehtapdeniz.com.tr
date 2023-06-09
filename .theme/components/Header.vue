<template>
  <header>
    <div class="header-area header-area--absolute">
      <div
        class="header-bottom-wrap header-sticky"
        :class="{ 'is-sticky':addSticky }"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="header position-relative">
                <div class="header__logo">
                  <NuxtLink to="/">
                    <img
                      src="/mds-logo.png"
                      height="80"
                      class="light-logo"
                      alt=""
                    >
                    <img
                      src="/mds-logo.png"
                      height="48"
                      class="dark-logo"
                      alt=""
                    >
                  </NuxtLink>
                </div>
                <div class="header-right">
                  <div class="header__navigation menu-style-four d-none d-xl-block">
                    <nav class="navigation-menu">
                      <ul>
                        <li :class="{ active: '/' === root }">
                          <NuxtLink to="/">
                            Ana Sayfa
                          </NuxtLink>
                        </li>
                        <ContentQuery
                          v-slot="{ data: menus }"
                          path="/"
                          :only="[ '_path', 'title', 'position' ]"
                          :where="{ _dir: { $eq: '' }, _path: { $and: [ { $ne: '/footer'}, { $ne:'/' } ] }, position: { $gt: 0 } }"
                          :sort="{ position: 1, $numeric: true }"
                        >
                          <li
                            v-for="menu in menus"
                            :key="menu.title"
                            :class="{ active: menu._path === root }"
                          >
                            <NuxtLink :to="menu._path == $route.path ? '' : menu._path">
                              {{ menu.title }}
                            </NuxtLink>
                          </li>
                        </ContentQuery>
                      </ul>
                    </nav>
                  </div>
                  <div
                    id="mobile-menu-trigger"
                    class="mobile-navigation-icon white-md-icon d-block d-xl-none"
                    @click="toogleMobileMenu"
                  >
                    <i />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="mobile-menu-overlay"
      class="mobile-menu-overlay"
      :class="{ 'active':mobileMenuActive }"
      @click="hideMobileMenu"
    >
      <div class="mobile-menu-overlay__inner">
        <div class="mobile-menu-overlay__header">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-md-6 col-8">
                <!-- logo -->
                <div class="logo">
                  <NuxtLink to="/">
                    <img
                      src="/mds-logo.png"
                      class="img-fluid"
                      alt=""
                    >
                  </NuxtLink>
                </div>
              </div>
              <div class="col-md-6 col-4">
                <!-- mobile menu content -->
                <div class="mobile-menu-content text-end">
                  <span
                    id="mobile-menu-close-trigger"
                    class="mobile-navigation-close-icon"
                    @click="hideMobileMenu"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mobile-menu-overlay__body">
          <nav class="offcanvas-navigation">
            <ul>
              <li>
                <NuxtLink to="/">
                  Ana Sayfa
                </NuxtLink>
              </li>
              <ContentQuery
                v-slot="{ data: menus }"
                path="/"
                :only="[ '_path', 'title', 'position' ]"
                :where="{ _dir: { $eq: '' }, _path: { $and: [ { $ne: '/footer'}, { $ne:'/' } ] }, position: { $gt: 0 } }"
                :sort="{ position: 1, $numeric: true }"
              >
                <li
                  v-for="menu in menus"
                  :key="menu.title"
                >
                  <NuxtLink :to="menu._path == $route.path ? '' : menu._path">
                    {{ menu.title }}
                  </NuxtLink>
                </li>
              </ContentQuery>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref, onBeforeMount, useRoute } from "#imports";

const route = useRoute();
const root = computed(() => `/${route.path.split("/")[1]}`);

const mobileMenuActive = ref(false);
const addSticky = ref(false);

function toogleMobileMenu() {
  mobileMenuActive.value = !mobileMenuActive.value;
}

function hideMobileMenu() {
  mobileMenuActive.value = false;
}

function handleScroll() {
  const scroll = window.scrollY;

  if(scroll < 80) {
    addSticky.value = false;
  } else {
    addSticky.value = true;
  }
}

onBeforeMount(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>
<style lang="scss" scoped>
.navigation-menu {
  a {
    color: $black !important;
    &:hover {
      color: $black !important;
    }
  }
}
header {
  display: block;
  height: 125px;

  @media #{$tablet-device} {
    height: 80px;
  }
  @media #{$large-mobile} {
    height: 80px;
  }

  #mobile-menu-overlay {
    .img-fluid {
      height: 40px;
    }
  }
}
</style>
