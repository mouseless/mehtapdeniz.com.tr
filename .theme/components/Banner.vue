<template>
  <div class="infotechno-hero infotechno-bg">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-lg-6 col-md-6">
          <div class="infotechno-hero-text wow move-down">
            <h1 class="font-weight--reguler mb-40">
              <slot />
            </h1>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="infotechno-hero-inner-images">
            <div class="infotechno-inner">
              <img
                class="img-fluid"
                :src="img"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  img: { type: String, required: true }
});
</script>
<style lang="scss">
.infotechno {
  &-bg {
    background-color: $white;
  }
  &-hero-text {
    max-width: 605px;
    float: right;
    width: 100%;
    padding-left: 30px;

    @media #{$large-mobile}{
      padding-left: 0;
      float: inherit;
      margin: 50px auto 20px;
      text-align: center;
      margin-top: 50px;
    }
    h1 {
      font-size: 90px;
      font-weight: 700;
      line-height: 80px;
      color: $theme-color--black;
      strong {
        color: $theme-color--default;
      }
    }
    @media only screen and (max-width: 767px) {
      h1 {
        font-size: 34px;
        font-weight: 700;
        line-height: 30px;
      }
    }
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      h1 {
        font-size: 54px;
        font-weight: 700;
        line-height: 54px;
      }
    }

    h6 {
      color: $theme-color--default;
      font-weight: 500;
      margin-bottom: 20px;
    }
  }
  &-hero-inner-images {
    margin-top: 20px;
    position: relative;
    @media #{$tablet-device} {
      margin-top: 40px;
    }
    @media #{$large-mobile} {
      max-width: 327px;
      margin: auto;
      &-inner {
        max-width: 260px;
        margin: auto;
      }
    }
    img {
      max-height: 600px;
    }
  }
}
</style>
