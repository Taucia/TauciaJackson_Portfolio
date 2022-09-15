<template>
 <section id="landing">
  <div class="container">
    <div class="row">
<landing/>
    </div>
  </div>
 </section>
 <section id="about">
  <div class="container">
    <div class="row">
      
    </div>
  </div>
 </section>
 <section id="resume">
  <div class="container">
    <div class="row">
      
    </div>
  </div>
 </section>
 <section id="skills">
  <div class="container">
    <div class="row">
      
    </div>
  </div>
 </section>
 <section id="projects">
  <div class="container">
    <div class="row">
      
    </div>
  </div>
 </section>
 <section id="testimonials">
  <div class="container">
    <div class="row">
      
    </div>
  </div>
 </section>
 <section id="contact">
  <div class="container">
    <div class="row">
      
    </div>
  </div>
 </section>

</template>

<script>
// @ is an alias to /src
import landing from '@/components/landingpage.vue';
import about from '@/components/aboutpage.vue';
import resume from '@/components/resumepage.vue';
import skills from '@/components/skillspage.vue';
import projects from '@/components/projectpage.vue';
import testimonials from '@/components/testimonialpage.vue';
import contact from '@/components/contactpage.vue';
export default {
  name: 'masterview',
  components: {
    landing,
    about,
    resume,
    skills,
    projects,
    testimonials,
    contact,


    
    




  }
}
</script>
<style scoped>

</style>
