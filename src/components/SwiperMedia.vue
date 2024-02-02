<script lang="ts">
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
} from "swiper/modules";

// Import Swiper Vue.js components
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
export default {
  props: {
    items: Array,
    default: [],
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      // console.log(swiper);
    };
    const onSlideChange = (swiper) => {
      // console.log(swiper);
      
    };
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Thumbs],
      Thumbs,
      thumbsSwiper,
      setThumbsSwiper,
    };
  },
};
</script>
<template>
  <div class="wrap-swiper-review">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      :thumbs="{ swiper: thumbsSwiper }"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="item of items">
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 90vh;
          "
        >
          <div v-if="item[1] == 'video'">
            <video controls style="width: 100%; max-height: 75vh">
              <source
                :src="
                  'https://ava-site.ru/reviews/videos/webp/' + item[2] + '.webp'
                "
                type="video/webm"
                style="width: 100%; max-height: 75vh"
              />

              <source
                :src="'https://ava-site.ru/reviews/videos/' + item[2] + '.mp4'"
                
                type="video/mp4"
                style="width: 100%; max-height: 75vh"
              />
            </video>
            {{ item[0] }}
          </div>
          <div v-else-if="item[1] == 'photo'">
            <img
              :src="'https://ava-site.ru/reviews/photos/' + item[2] + '.jpeg'"
              alt=""
              style="width: 100%; max-height: 75vh"
              class="swiper-lazy" 
            />
            <!-- <div class="swiper-lazy-preloader"></div> -->
          </div>
        </div>
      </swiper-slide>
      ...
    </swiper>

    <swiper
      :modules="modules"
      :slides-per-view="15"
      watch-slides-progress
      :space-between="2"
      @swiper="setThumbsSwiper"
    >
      <swiper-slide v-for="item of items">
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 7vh;
            max-width: 30px;
            max-height: 70px;
          "
        >
          <div v-if="item[1] == 'video'">
            <img
              :src="
                'https://ava-site.ru/reviews/videos/webp/' + item[2] + '.webp'
              "
              alt=""
              style="width: 100%; cursor: pointer; border-radius: 6px"
            />
          </div>
          <div v-else-if="item[1] == 'photo'">
            <img
              :src="
                'https://ava-site.ru/reviews/photos/webp/' + item[2] + '.webp'
              "
              alt=""
              style="width: 100%; cursor: pointer; border-radius: 6px"
            />
          </div>
        </div>
      </swiper-slide>
      ...
    </swiper>
  </div>
</template>

<!-- <script setup lang="ts">
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const props = defineProps({
  items: {
    type: Object,
    required: true,
    default: () => {},
  },
});


const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};


</script>

<template>
  <swiper
    :modules=" [Navigation, Pagination, , A11y]"
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="item of items" >
        <div v-if="item[1] == 'video'">
            <video :src="'https://ava-site.ru/reviews/videos/' + item[2] + '.mp4'"></video>
        </div>
        <div v-if="item[1] == 'photo' && item[5] == 'Ozon'">
                <img :src="'https://ava-site.ru/reviews/photos/' + item[2] + '.jpeg'" alt="">
        </div>
        <div  v-if="item[1] == 'photo' && item[5] == 'Yandex'">
                <img :src="'https://ava-site.ru/reviews/photos/webp/' + item[2] + '.webp'">
        </div>
    </swiper-slide>
    
  </swiper>
</template> -->
