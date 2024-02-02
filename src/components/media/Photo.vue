<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => {},
  },
  media: {
    type: Number,
  },
  
});

</script>

<template>
  <div v-if="item[1] == 'photo' && item[5] == 'Ozon'"  >
    <div
      v-if="item[1] == 'photo' && item[0] < 7"
      class="block-media-review"
      :style="{
        background:
          'url(https://ava-site.ru/reviews/photos/webp/' + item[2] + '.webp',
      }"
    ></div>
    <div
      v-if="item[1] == 'photo' && item[0] === 7"
      class="block-media-review"
      :style="{
        background:
          'url(https://ava-site.ru/reviews/photos/webp/' + item[2] + '.webp',
      }"
    >
      <div class="more-media-review">+{{ media }}</div>
    </div>
  </div>
  <div v-if="item[1] == 'photo' && item[5] == 'Yandex'">
    <div
      v-if="item[1] == 'photo' && item[0] < 7"
      class="block-media-review"
      :style="{
        background:
          'url(https://ava-site.ru/reviews/photos/webp/' + item[2] + '.webp',
      }"
    ></div>

    <div
      v-if="item[1] == 'photo' && item[0] === 7"
      class="block-media-review"
      :style="{
        background:
          'url(https://ava-site.ru/reviews/photos/webp/' + item[2] + '.webp',
      }"
    >
      <div class="more-media-review">+{{ media }}</div>
    </div>
  </div>
</template>
