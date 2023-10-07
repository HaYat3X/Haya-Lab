<template>
  <!-- <div class="header">
    <AppHeader />
  </div> -->
  <TopBanner />
  <AboutSite />
  <AboutMe />
  <MyWorks />
  <MySkill />
  <ContactMe />
  <EndBanner />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import TopBanner from '@/components/TopBanner.vue';
import AboutSite from '@/components/AboutSite.vue';
import AboutMe from '@/components/AboutMe.vue';
import MyWorks from '@/components/MyWorks.vue';
import MySkill from '@/components/MySkill.vue';
import ContactMe from '@/components/ContactMe.vue';
import EndBanner from '@/components/EndBanner.vue';

export default {
  name: 'HomeView',
  components: {
    AppHeader,
    TopBanner,
    AboutSite,
    AboutMe,
    MyWorks,
    MySkill,
    ContactMe,
    EndBanner
  }
}
</script>
