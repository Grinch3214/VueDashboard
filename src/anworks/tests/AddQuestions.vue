<template>
  <div class="row">
    <div class="col-12 col-md-8 mb-2">
      <div class="p-2 bg-white rounded shadow-sm h-100">

        <div class="col-12 col-md-8 mb-2">
          <p class="small mb-25">
            Тема</p>
          <b-form-select
            v-model="selectedTechnology"
            :options="optionsTechnology"
          />
        </div>

        <div class="col-12 col-md-8 mb-2">
          <p class="small mb-25">
            Сложность по Блуму</p>
          <bloom-buttons :bloomButtons="radio" /> <!-- BLOOM BUTTONS @bloomTest="onTest"-->
        </div>

        <div class="col-12 mb-2 col-md-4">
          <p class="small mb-25">
            Время на задание</p>
          <b-form-select
            v-model="selectedTimeQuestion"
            :options="optionsTimeQuestion"
          />
        </div>

        <div class="col-12 col-md-4 position-relative mb-2">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            @click="isActive = !isActive"
          >
            Тип задания
          </b-button>
          <div
            :class="{active: isActive}"
            class="questions-box bg-white py-2 shadow position-absolute d-flex flex-column align-items-center"
          >
            <div class=" d-flex mt-2">
              <div class="mx-2 text-center width-160">
                <h5 class="text-nowrap">
                  Несколько ответов</h5>
                <p
                  class="test-image"
                  @click="isActive = !isActive"
                >
                  <img
                    :src="require('@/assets/images/pages/tests/btn_1.svg')"
                    alt="test"
                  >
                </p>
              </div>

              <div class="mx-2 text-center width-160">
                <h5 class="text-nowrap">
                  Один ответ</h5>
                <p
                  class="test-image"
                  @click="isActive = !isActive"
                >
                  <img
                    :src="require('@/assets/images/pages/tests/btn_2.svg')"
                    alt="test"
                  >
                </p>
              </div>

              <div class="mx-2 text-center width-160">
                <h5 class="text-nowrap">
                  Верно/неверно</h5>
                <p
                  class="test-image"
                  @click="isActive = !isActive"
                >
                  <img
                    :src="require('@/assets/images/pages/tests/btn_3.svg')"
                    alt="test"
                  >
                </p>
              </div>
            </div>

            <div class=" d-flex mt-2">
              <div class="mx-2 text-center width-160">
                <h5 class="text-nowrap">
                  Соответствие</h5>
                <p
                  class="test-image"
                  @click="isActive = !isActive"
                >
                  <img
                    :src="require('@/assets/images/pages/tests/btn_4.svg')"
                    alt="test"
                  >
                </p>
              </div>

              <div class="mx-2 text-center width-160">
                <h5 class="text-nowrap">
                  Развёрнутый ответ</h5>
                <p
                  class="test-image"
                  @click="isActive = !isActive"
                >
                  <img
                    :src="require('@/assets/images/pages/tests/btn_5.svg')"
                    alt="test"
                  >
                </p>
              </div>

              <div class="mx-2 text-center width-160">
                <h5 class="text-nowrap">
                  Заполнить пропуски</h5>
                <p
                  class="test-image"
                  @click="isActive = !isActive"
                >
                  <img
                    :src="require('@/assets/images/pages/tests/btn_6.svg')"
                    alt="test"
                  >
                </p>
              </div>
            </div>

            <div class=" d-flex mt-2">
              <div class="mx-2 text-center width-160">
                <h5 class="text-nowrap">
                  Выбор из списка</h5>
                <p
                  class="test-image"
                  @click="isActive = !isActive"
                >
                  <img
                    :src="require('@/assets/images/pages/tests/btn_7.svg')"
                    alt="test"
                  >
                </p>
              </div>

              <div class="mx-2 text-center width-160">
                <h5 class="text-nowrap">
                  Последовательность</h5>
                <p
                  class="test-image"
                  @click="isActive = !isActive"
                >
                  <img
                    :src="require('@/assets/images/pages/tests/btn_8.svg')"
                    alt="test"
                  >
                </p>
              </div>

              <div class="mx-2 text-center width-160">
                <h5 class="text-nowrap">
                  Числовой ответ</h5>
                <p
                  class="test-image"
                  @click="isActive = !isActive"
                >
                  <img
                    :src="require('@/assets/images/pages/tests/btn_9.svg')"
                    alt="test"
                  >
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 d-flex align-items-center">
          <div class="col-8 pl-0">
            <b-form-group
              label="Вопрос"
              label-for="questionTest"
            >
              <b-form-input
                id="questionTest"
                v-model="questionStatement"
                placeholder="Выберите правильные утверждения"
              />
            </b-form-group>
          </div>
          <input
            id="input_file"
            ref="resetPreview"
            class="input_file"
            type="file"
            @change="showFilePreview"
          >
          <label
            for="input_file"
            class="input-file-button col-1 mt-1"
          ><feather-icon
            icon="ImageIcon"
            class="mr-25"
            size="28"
          />
          </label>
        </div>
        <h5 class="col-12">
          Тип задания: <span class="h4 pl-2">{{ optionsTechnology[0].text }}</span></h5>
        <div
          id="preview"
          class="col-12 mb-1"
        >
          <img
            v-if="image"
            :src="image"
          >
          <button @click="clearPreview">
            <feather-icon
              icon="XIcon"
              class="mr-25"
              size="25"
            />
          </button>
        </div>

        <div class="col-12">
          <types-repeat-form
            :settings="{
              defaultVariantSize: 2,
              leftColumnTitle: 'Верный ответ',
              rightColumnTitle: 'Варианты ответов',
            }"
            @addTest="addTest"
          />
        </div>
        <div class="col-12 pl-0">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="mt-3"
            @click="addTest()"
          >
            Добавить вопрос
          </b-button>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-4 mb-2">
      <div class="p-2 bg-white rounded shadow-sm h-100">
        <h2>Добавленные вопросы</h2>
        <p>Вопросов: {{ 2 }}</p>
        <item-test />
      </div>
    </div>

  </div>

</template>

<script>
import {
  BFormSelect, BButton, BFormGroup, BFormInput,
} from 'bootstrap-vue'
import BloomButtons from '@/anworks/components/BloomButtons.vue'
import Ripple from 'vue-ripple-directive'
import TypesRepeatForm from '../components/TypesRepeatForm.vue'
import ItemTest from './ItemTest.vue'

export default {
  components: {
    BFormSelect,
    BloomButtons,
    BButton,
    BFormGroup,
    BFormInput,
    TypesRepeatForm,
    ItemTest,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      radio: {
        radio: '1',
      },
      questionStatement: '',
      image: null,
      isActive: false,
      selectedTechnology: 'js',
      optionsTechnology: [
        { value: 'js', text: 'Основы JavaScript' }, { value: 'qa', text: 'Основы QA' }, { value: 'markup', text: 'Основы markup' },
      ],
      selectedTimeQuestion: '3min',
      optionsTimeQuestion: [
        { value: '3min', text: '3 минуты' }, { value: '5min', text: '5 минут' }, { value: '10min', text: '10 минут' },
      ],
    }
  },
  methods: {
    showFilePreview(event) {
      const files = event.target.files || event.dataTransfer.files
      if (!files.length) return
      this.image = URL.createObjectURL(files[0])
    },
    clearPreview() {
      this.image = null
      this.$refs.resetPreview.value = ''
    },
    addTest() {
      console.log(this.image)
      console.log(this.selectedTechnology)
      console.log(this.selectedTimeQuestion)
      console.log(this.radio)
      console.log(this.questionStatement)
      console.log(this.$emit('addTest', this.settings))
    },
  },
}
</script>

<style lang="scss">
  .test-image {
    display: inline-block;
    width: 118px;
    height: 118px;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 0px 10px rgba(130, 134, 139, 0.24);
    }
  }

  .questions-box {
    border-radius: 15px;
    top: 0;
    left: 190px;
    transform: scale(0);
    transition: .2s;
  }

  .questions-box.active {
    transform: scale(1);
    z-index: 1;
  }

  .width-160 {
    min-width: 160px;
  }

  #preview {
  position: relative;
    max-width: 368px;
    height: auto;
    button {
      display: none;
      position: absolute;
      top: 0;
      right: -40px;
      background: transparent;
      border: none;
      outline: none;
    }
    img {
        width: 100%;
        border-radius: 15px;
    }
    img + button {
      display: inline-block;
    }
}

.input_file {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}

.input-file-button {
  cursor: pointer;
}
</style>
