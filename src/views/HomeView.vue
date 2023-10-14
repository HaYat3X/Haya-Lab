<template>
  <div>
    <div class="header">
      <AppHeader />
    </div>

    <div class="main">
      <TopBanner />
      <AboutSite />
      <AboutMe />
      <MyWorks />
      <MySkill />
      <ContactMe />
      <EndBanner />
    </div>

    <div class="footer">
      <AppFooter />
    </div>
  </div>
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
import AppFooter from '@/components/AppFooter.vue';

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
    EndBanner,
    AppFooter
  }
}
</script>
