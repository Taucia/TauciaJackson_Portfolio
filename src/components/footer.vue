<template>
  <div class="footer-section">
    <div class="container-fluid">
      <div class="footer-cta pt-5 pb-5">
        <div class="row">
          
          <div class="col-xs-4 col-lg-4 col-md-4 mb-30">
            <div class="single-cta">
              <i class="fas fa-phone"></i>
              <div class="cta-text">
                <h4>Contact me</h4>
                <span>084-357-8830</span>
              </div>
            </div>
          </div>
          <div class="col-xs-4 col-lg-4 col-md-4  mb-30">
            <div class="footer-widget">
              <div class="footer-widget-heading">
                 <i class="fas fa-link"></i>
                <h3>Useful Links</h3>
              </div>
              <ul>
                <li><a href="/landing">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/resume">resume</a></li>
                <li><a href="/skills">Skills</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/testamonials">Testamonials</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>
          <div class="col-xs-4 col-lg-4 col-md-4 mb-30">
            <div class="single-cta">
              <i class="far fa-envelope"></i>
              <div class="cta-text">
                <h4>Email me @</h4>
                <span>Taucia.jackson123@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-content pt-5 ">
        <div class="row text-center">
         
          <div class="col-xs-12 col-lg-12 col-md-12 mb-50">
            
            <div class="footer-widget">
              <div class="footer-text">
                
              </div>
              <div class="copyright-text">
                <p>
                  Copyright &copy; 2022, All Right Reserved
                 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
ul {
  margin: 0px;
  padding: 0px;
}
.footer-section {
  background: transparent;
  position: relative;
}
.footer-cta {
  border-bottom: 1px solid #dcabdf;
}

.single-cta i {
  
  color:  #dcabdf;
  font-size: 30px;
  float: left;
  margin-top: 8px;
}
.cta-text {
  padding-left: 15px;
  display: inline-block;
}
.cta-text h4 {
  color: #dfb3e2;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 2px;
}
.cta-text span {
  color: #dfb3e2;
  font-size: 15px;
}
.footer-content {
  position: relative;
  z-index: 2;
}
.footer-pattern img {
  position: absolute;
  top: 0;
  left: 0;
  height: 330px;
  background-size: cover;
  background-position: 100% 100%;
}
.footer-logo {
  margin-bottom: 30px;
}
.footer-logo img {
  max-width: 250px;
}
.footer-text p {
  margin-bottom: 14px;
  font-size: 14px;
  color: #dfb3e2;
  line-height: 28px;
}
.footer-social-icon span {
  color: #dfb3e2;
  display: block;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
}
.footer-social-icon a {
  color: #dfb3e2;
  font-size: 16px;
  margin-right: 15px;
}
.footer-social-icon i {
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 38px;
  border-radius: 50%;
}
.facebook-bg {
  background: white;
  color: #dfb3e2;
}
.twitter-bg {
  background: white;
  color: #dfb3e2;
}
.google-bg {
  background: white;
  color: #dfb3e2;
}
.footer-widget-heading h3 {
  color: #dfb3e2;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  position: relative;
}
.footer-widget-heading h3::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -15px;
  height: 2px;
  width: 50px;
  background: #dfb3e2;
}
.footer-widget ul li {
  display: inline-block;
  /* float: left; */
  width: 50%;
  margin-bottom: 12px;
}
.footer-widget ul li a:hover {
  color: #dfb3e2;
}
.footer-widget ul li a {
  color: #dfb3e2;
  text-transform: capitalize;
}
.subscribe-form {
  position: relative;
  overflow: hidden;
}
.subscribe-form input {
  width: 100%;
  padding: 14px 28px;
  background: white;
  border: 1px solid #dfb3e2;
  color: #dfb3e2;
}
.subscribe-form button {
  position: absolute;
  right: 0;
  background: #dfb3e2;
  padding: 13px 20px;
  border: 1px solid #dfb3e2;
  top: 0;
}
.subscribe-form button i {
  color: #dfb3e2;
  font-size: 22px;
  transform: rotate(-6deg);
}
.copyright-area {
  background: transparent;
  padding: 25px 0;
}
.copyright-text p {
  margin: 0;
  font-size: 14px;
  color: #dfb3e2;
}
.copyright-text p a {
  color: #dfb3e2;
}
.footer-menu li {
  display: inline-block;
  margin-left: 20px;
}
.footer-menu li:hover a {
  color: #dfb3e2;
}
.footer-menu li a {
  font-size: 14px;
  color: #dfb3e2;
}
</style>