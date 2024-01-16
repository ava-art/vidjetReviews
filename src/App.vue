<script setup lang="ts">
import { useReviewStore } from "./stores/ReviewStore";

import Review from "./components/Review.vue";
import Media from "./components/Media.vue";
import "./style.css";

const reviewStore = useReviewStore();

const title = document.getElementById("title").innerHTML;
const clientBuyThis = Number(document.getElementById("client-buy-this").innerHTML);

reviewStore.getReviews(title);

const changeSelect = (e) => {
  
  if (e.target.value === "new") reviewStore.reviews.sort((a,b) => a.dateNum < b.dateNum);
  if (e.target.value === "old") reviewStore.reviews.sort((a,b) => a.dateNum > b.dateNum);
  if (e.target.value === "top") reviewStore.reviews.sort((a,b) => a.rating < b.rating);
  if (e.target.value === "bottom") reviewStore.reviews.sort((a,b) => a.rating > b.rating);

  
};
</script>

<template>
  <div id="sp-product-reviews-widget">
    <div class="sp-heading">Отзывы для {{ title }}</div>
    <div class="wrap-block-media-reviews">
      <Media
        v-for="item of reviewStore.mediaCutArMedia[0]"
        :key="item[0]"
        :item="item"
      />
    </div>
    <div class="sp-widget-content">
      <!-- Summary -->
      <div class="sp-summary">
        <!-- Photos -->

        <!-- Actions -->
        <div class="sp-summary-actions">
          <div class="sp-summary-filters">
            <!-- Sort order -->
            <div class="sp-summary-sort-selector">
              <div class="sp-summary-sort-selector-select">
                <select
                  class="sp-summary-sort-selector-real-select"
                  @change="changeSelect"
                >
                  <option value="new" selected="">Сначала новые</option>
                  <option value="old">Сначала старые</option>
                  <option value="top">Сначала с высокой оценкой</option>
                  <option value="bottom">Сначала с низкой оценкой</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Review form button -->
          <div class="sp-summary-actions" v-if="clientBuyThis === 1">
            <button
              class="sp-summary-actions-primary-button"
              type="button"
              data-sp-surveybox=""
            >
              Оставить отзыв
            </button>
          </div>
          <div class="sp-summary-actions not-buy-this" v-if="clientBuyThis === 0">
            Мы не нашли данный товар среди ваших покупок. Вы можете оставлять отзыв только к товарам, которые приобретали на nordfrost.ru. 
          </div>
        </div>
      </div>

      <!-- Reviews -->
      <div class="sp-content" v-if="reviewStore.rating > 0">
        <div class="sp-reviews">
          <div class="sp-review-list">
            <Review
              v-for="review of reviewStore.reviews"
              :key="review.id"
              :review="review"
            />
          </div>
        </div>

        <div class="sp-content-summary">
          <!-- Rating -->
          <div
            class="sp-content-rating"
            itemprop="aggregateRating"
            itemscope=""
            itemtype="http://schema.org/AggregateRating"
          >
            <div class="sp-content-rating-stars">
              <div class="sp-star-on"></div>
              <div class="sp-star-on"></div>
              <div class="sp-star-on"></div>
              <div class="sp-star-on"></div>
              <div class="sp-star-on"></div>
            </div>
            <span class="sp-content-rating-value" itemprop="ratingValue">{{
              reviewStore.middleRating
            }}</span>
            <span class="sp-content-rating-disclaimer">
              /&nbsp;
              <span itemprop="reviewCount"></span>
              {{ reviewStore.rating }}
            </span>
          </div>

          <!-- Rating distribution-->
          <div class="sp-content-rating-distribution">
            <div class="sp-content-rating-distribution-item">
              <div class="sp-content-rating-distribution-item-label">
                5 звезд
              </div>

              <div class="sp-content-rating-distribution-item-bar">
                <div
                  class="sp-content-rating-distribution-item-bar-progress"
                  :style="{ width: reviewStore.ratingCount[0][1] + '%' }"
                ></div>
              </div>

              <div class="sp-content-rating-distribution-item-value">
                {{ reviewStore.ratingCount[0][0] }}
              </div>
            </div>

            <div class="sp-content-rating-distribution-item">
              <div class="sp-content-rating-distribution-item-label">
                4 звезды
              </div>

              <div class="sp-content-rating-distribution-item-bar">
                <div
                  class="sp-content-rating-distribution-item-bar-progress"
                  :style="{ width: reviewStore.ratingCount[1][1] + '%' }"
                ></div>
              </div>

              <div class="sp-content-rating-distribution-item-value">
                {{ reviewStore.ratingCount[1][0] }}
              </div>
            </div>

            <div class="sp-content-rating-distribution-item">
              <div class="sp-content-rating-distribution-item-label">
                3 звезды
              </div>

              <div class="sp-content-rating-distribution-item-bar">
                <div
                  class="sp-content-rating-distribution-item-bar-progress"
                  :style="{ width: reviewStore.ratingCount[2][1] + '%' }"
                ></div>
              </div>

              <div class="sp-content-rating-distribution-item-value">
                {{ reviewStore.ratingCount[2][0] }}
              </div>
            </div>

            <div class="sp-content-rating-distribution-item">
              <div class="sp-content-rating-distribution-item-label">
                2 звезды
              </div>

              <div class="sp-content-rating-distribution-item-bar">
                <div
                  class="sp-content-rating-distribution-item-bar-progress"
                  :style="{ width: reviewStore.ratingCount[3][1] + '%' }"
                ></div>
              </div>

              <div class="sp-content-rating-distribution-item-value">
                {{ reviewStore.ratingCount[3][0] }}
              </div>
            </div>

            <div class="sp-content-rating-distribution-item">
              <div class="sp-content-rating-distribution-item-label">
                1 звезда
              </div>

              <div class="sp-content-rating-distribution-item-bar">
                <div
                  class="sp-content-rating-distribution-item-bar-progress"
                  :style="{ width: reviewStore.ratingCount[4][1] + '%' }"
                ></div>
              </div>

              <div class="sp-content-rating-distribution-item-value">
                {{ reviewStore.ratingCount[4][0] }}
              </div>
            </div>
          </div>

          <!-- Dimensions-->

          <!-- Photos -->
        </div>
      </div>
      <div class="sp-content" v-if="reviewStore.rating <= 0">
        Отзывов пока нет.
      </div>
    </div>
  </div>
</template>
