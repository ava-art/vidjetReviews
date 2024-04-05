<script lang="ts" setup>
import "../omnibox.css";
import { ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
});

const soglasie = ref(true);
const sendReview = ref(2);
const reviewItem = ref({
  name: props.name,
  title: props.title,
  star: 0,
  new: 0,
  comment: "",
  plus: "",
  minus: "",
  photo: "",
  soglasie: true,
});
const chooseFiles = () => {
  document.getElementById("fileUploadReview").click();
};
const onMouseover = (id: number) => {
  const items = document.querySelectorAll(
    "#sp-omnibox .sp-rating-star.sp-rating-star-off"
  );
  items.forEach((el, idx) => {
    if (id >= idx) {
      items[idx].className = "sp-rating-star sp-rating-star-off active";
    }
  });
};
const onClickStar = (id: number) => {
  const items = document.querySelectorAll(
    "#sp-omnibox .sp-rating-star.sp-rating-star-off"
  );
  items.forEach((el, idx) => {
    items[idx].setAttribute("data-checked", "false");
  });
  items.forEach((el, idx) => {
    if (id >= idx) {
      items[idx].setAttribute("data-checked", "true");
      reviewItem.value.star = id + 1;
    }
  });
};
const onMouseout = () => {
  const items = document.querySelectorAll(
    "#sp-omnibox .sp-rating-star.sp-rating-star-off"
  );
  items.forEach((el, idx) => {
    items[idx].className = "sp-rating-star sp-rating-star-off";
  });
};

const uploadPhoto = async (file) => {
  var data = new FormData();
  data.append("file", file);

  try {
    const res = await fetch("https://ava-site.ru/reviews/upload-photo.php", {
      method: "post",
      body: data,
    });
    const datas = await res.text();
    reviewItem.value.photo = datas;
  } catch (error) {
    console.log(error);
  }
};

const onSubmit = async () => {
  try {
    const res = await fetch("https://ava-site.ru/reviews/add-new-review.php", {
      method: "post",
      body: JSON.stringify(reviewItem.value),
    });
    const data = await res.json();
    sendReview.value = data;


  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div id="sp-omnibox">
    <div class="sp-application">
      <div class="sp-page sp-review-form-page">
        <div class="sp-page-inner">
          <div class="sp-page-header">
            <div class="sp-page-title-wrapper">
              <div class="sp-page-title sp-title">Новый отзыв</div>
              <br />
              <div class="sp-page-subtitle sp-subhead">
                {{ title }}
              </div>
            </div>
          </div>
          <div
            class="sp-page-content sp-review-form sp-scrollable success-review"

            v-if="sendReview == 1"
          >
          <div>
            Ваш отзыв успешно отправлен!<br>
            После проверки он появится на сайте.<br>
            Благодарим за доверие!
          </div>
        </div>
          <div
            class="sp-page-content sp-review-form sp-scrollable"
            v-if="sendReview == 0"
          >
          <div>
            Произошла ошибка.<br>
            Попробуйте снова или обратитесь в службу поддержки.<br>
            Благодарим за выбор NORDFROST!
          </div>
        </div>
          <div
            class="sp-page-content sp-review-form sp-scrollable"
            v-if="sendReview == 2"
          >
            <div class="sp-review-form-inputs">
              <div
                class="sp-input-container sp-rating-stars-input-container sp-review-rating-detail sp-0-stars"
              >
                <div class="sp-rating-stars-input">
                  <div class="sp-rating-stars sp-rating-stars-editable">
                    <div
                      @mouseover="(id) => onMouseover(0)"
                      @click="(id) => onClickStar(0)"
                      @mouseout="onMouseout"
                      class="sp-rating-star sp-rating-star-off"
                      data-checked="false"
                    ></div>
                    <div
                      @mouseover="(id) => onMouseover(1)"
                      @click="(id) => onClickStar(1)"
                      @mouseout="onMouseout"
                      class="sp-rating-star sp-rating-star-off"
                      data-checked="false"
                    ></div>
                    <div
                      @mouseover="(id) => onMouseover(2)"
                      @click="(id) => onClickStar(2)"
                      @mouseout="onMouseout"
                      class="sp-rating-star sp-rating-star-off"
                      data-checked="false"
                    ></div>
                    <div
                      @mouseover="(id) => onMouseover(3)"
                      @click="(id) => onClickStar(3)"
                      @mouseout="onMouseout"
                      class="sp-rating-star sp-rating-star-off"
                      data-checked="false"
                    ></div>
                    <div
                      @mouseover="(id) => onMouseover(4)"
                      @click="(id) => onClickStar(4)"
                      @mouseout="onMouseout"
                      class="sp-rating-star sp-rating-star-off"
                      data-checked="false"
                    ></div>
                  </div>
                </div>
                <div class="sp-input-errors sp-input-no-errors"></div>
              </div>
              <div class="sp-input-container">
                <label class="sp-review-body-label sp-input-label"
                  >Комментарий:</label
                >
                <div class="sp-media-files-dropzone">
                  <div class="sp-review-form-text-inputs">
                    <div
                      class="sp-input-container sp-review-body sp-input-textarea"
                    >
                      <div class="textarea-wrapper">
                        <textarea
                          v-model="reviewItem.comment"
                          id="sp-element-2"
                          placeholder="Опишите подробнее свои впечатления"
                          rows="2"
                          class="sp-input"
                          style="
                            overflow: hidden;
                            overflow-wrap: break-word;
                            resize: none;
                            height: 53px;
                          "
                        ></textarea>
                      </div>
                      <div class="sp-input-errors sp-input-no-errors"></div>
                    </div>
                    <div
                      class="sp-input-container sp-review-pros sp-input-textarea"
                    >
                      <div class="textarea-wrapper">
                        <textarea
                          v-model="reviewItem.plus"
                          id="sp-element-3"
                          placeholder="Опишите достоинства"
                          rows="1"
                          class="sp-input"
                          style="
                            overflow: hidden;
                            overflow-wrap: break-word;
                            resize: none;
                            height: 34px;
                          "
                        ></textarea>
                      </div>
                      <div class="sp-input-errors sp-input-no-errors"></div>
                    </div>
                    <div
                      class="sp-input-container sp-review-cons sp-input-textarea"
                    >
                      <div class="textarea-wrapper">
                        <textarea
                          v-model="reviewItem.minus"
                          id="sp-element-4"
                          placeholder="Опишите недостатки"
                          rows="1"
                          class="sp-input"
                          style="
                            overflow: hidden;
                            overflow-wrap: break-word;
                            resize: none;
                            height: 34px;
                          "
                        ></textarea>
                      </div>
                      <div class="sp-input-errors sp-input-no-errors"></div>
                    </div>
                    <div class="sp-review-photos">
                      <div v-if="reviewItem.photo">
                        <img
                          style="max-width: 50px"
                          width="50"
                          height="80"
                          :src="
                            'https://ava-site.ru/reviews/photos/webp/' +
                            reviewItem.photo +
                            '.webp'
                          "
                          alt=""
                        />
                      </div>
                      <div class="sp-media-files-add sp-gt-xs">
                        <div>
                          <input
                            @input="
                              (event) =>
                                (reviewItem.photo = event.target.files[0])
                            "
                            @change="(e) => uploadPhoto(e.target.files[0])"
                            id="fileUploadReview"
                            class="hidden"
                            type="file"
                            hidden
                            accept="image/png, image/jpeg, image/jpg"
                          />
                          <button
                            @click="chooseFiles()"
                            sp-media-files-add-button="true"
                            class="sp-media-files-add-icon sp-dz-clickable"
                          >
                            <img src="#" alt="" />
                          </button>
                          <span class="sp-media-files-add-hint"
                            >Добавте фото</span
                          >
                          <button
                            @click="chooseFiles()"
                            type="button"
                            sp-media-files-add-button="true"
                            class="sp-media-files-add-button sp-unstyled-button"
                          >
                            выбрать файл
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="sp-input-container sp-review-author-name sp-input-text"
              >
                <label for="sp-element-6" class="sp-input-label"
                  >Как вас зовут?</label
                >
                <input
                  id="sp-element-6"
                  type="text"
                  placeholder="Ваше имя"
                  :value="reviewItem.name ? reviewItem.name : name"
                  @input="(event) => (reviewItem.name = event.target.value)"
                  class="sp-input"
                />
                <div class="sp-input-errors sp-input-no-errors"></div>
              </div>
              <div
                class="sp-agreement-confirmation sp-input-container sp-input-checkbox"
              >
                <input
                  @change="soglasie = !soglasie"
                  type="checkbox"
                  checked
                  id="new-review-politic"
                  class="sp-input sp-input-required"
                />
                <label class="sp-input-label" for="new-review-politic">
                  Я согласен с правилами публикации пользовательского контента и
                  даю согласие на обработку
                  <a
                    href="https://nordfrost.ru/personal/poryadok-obrabotki-personalnykh-dannykh.php"
                    target="_blank"
                    >персональных данных</a
                  >.
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="sp-page-footer sp-review-form-actions">
          <div class="sp-page-footer-content">
            <button
              v-if="
                soglasie && reviewItem.star > 0 && (reviewItem.name || name) && sendReview == 2
              "
              type="button"
              class="sp-review-form-save sp-button sp-primary sp-raised"
              @click="onSubmit"
            >
              Отправить отзыв
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
