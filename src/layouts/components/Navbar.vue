<template>
  <div class="navbar-container d-flex content align-items-center navbar-light">

    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link
          class="nav-link"
          @click="toggleVerticalMenuActive"
        >
          <feather-icon
            icon="MenuIcon"
            size="21"
          />
        </b-link>
      </li>
    </ul>

    <!-- Left Col -->
    <div class="header-navbar navbar-expand-sm navbar navbar-horizontal navbar-light navbar-shadow menu-border d-none d-xl-block">
      <!-- <dark-Toggler class="d-none d-lg-block" /> -->
      <horizontal-nav-menu-items :items="navMenuItems" />
    </div>

    <b-navbar-nav class="nav align-items-center ml-auto flex-nowrap">
      <notification-dropdown />
      <b-nav-item-dropdown
        right
        toggle-class="d-flex align-items-center dropdown-user-link"
        class="dropdown-user"
      >
        <template #button-content>
          <div class="d-sm-flex d-none user-nav">
            <p class="user-name font-weight-bolder mb-0">
              Roman Masyahin
            </p>
            <span class="user-status">Админ</span>
          </div>
          <b-avatar
            size="40"
            variant="light-primary"
            badge
            :src="require('@/assets/images/avatars/testImg.png')"
            class="badge-minimal"
            badge-variant="success"
          />
        </template>

        <b-dropdown-item link-class="d-flex align-items-center">
          <feather-icon
            size="16"
            icon=""
            class="mr-50"
          />
          <span>Что-то</span>
        </b-dropdown-item>

        <b-dropdown-item link-class="d-flex align-items-center">
          <feather-icon
            size="16"
            icon=""
            class="mr-50"
          />
          <span>Что-то</span>
        </b-dropdown-item>

        <b-dropdown-item link-class="d-flex align-items-center">
          <feather-icon
            size="16"
            icon=""
            class="mr-50"
          />
          <span>Настройки</span>
        </b-dropdown-item>

        <b-dropdown-item link-class="d-flex align-items-center">
          <feather-icon
            size="16"
            icon=""
            class="mr-50"
          />
          <span>Избранное</span>
        </b-dropdown-item>

        <b-dropdown-divider />

        <b-dropdown-item link-class="d-flex align-items-center">
          <feather-icon
            size="16"
            icon=""
            class="mr-50"
          />
          <span>Выйти</span>
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </div>
</template>

<script>
import {
  BLink, BNavbarNav, BNavItemDropdown, BDropdownItem, BDropdownDivider, BAvatar,
} from 'bootstrap-vue'
// import DarkToggler from '@core/layouts/components/app-navbar/components/DarkToggler.vue'
import navMenuItems from '@/navigation/horizontal'
import HorizontalNavMenuItems from '@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue'
import NotificationDropdown from '@/./views/NotificationDropdown.vue'

export default {
  components: {
    BLink,
    BNavbarNav,
    BNavItemDropdown,
    BDropdownItem,
    BDropdownDivider,
    BAvatar,
    HorizontalNavMenuItems,
    NotificationDropdown,

    // Navbar Components
    // DarkToggler,
  },
  setup() {
    return {
      navMenuItems,
    }
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },
}
</script>

<style lang="scss">
@import "@core/scss/base/core/menu/menu-types/horizontal-menu.scss";
.horizontal-menu .navbar.header-navbar .navbar-container{
  padding: 0 2rem;
}
.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li:first-child svg {
      width: 20px;
      height: 20px;
}
</style>
