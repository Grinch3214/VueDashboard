<template>
  <div>

    <!-- Form: Personal Info Form -->
    <b-form class="mt-1">
      <b-row>

        <!-- Field: Mobile -->
        <b-col
          cols="12"
          md="6"
          lg="12"
        >
          <form-search-repeat />
        </b-col>

        <b-col
          cols="12"
          md="6"
          lg="4"
        >
          <b-form-group
            label="Viber"
            label-for="viber"
          >
            <b-input-group>
              <b-input-group-prepend is-text>
                <feather-icon
                  icon="PhoneCallIcon"
                  size="18"
                />
              </b-input-group-prepend>
              <b-form-input
                id="viber"
                v-model="userDataInfo.viber"
                placeholder="Viber"
              />
            </b-input-group>
          </b-form-group>
        </b-col>

        <b-col
          cols="12"
          md="6"
          lg="4"
          offset-lg="1"
        >
          <b-form-group
            label="Facebook"
            label-for="facebook"
          >
            <b-input-group>
              <b-input-group-prepend is-text>
                <feather-icon
                  icon="FacebookIcon"
                  size="18"
                />
              </b-input-group-prepend>
              <b-form-input
                id="facebook"
                v-model="userDataInfo.facebook"
                placeholder="Facebook"
              />
            </b-input-group>
          </b-form-group>
        </b-col>

        <b-col
          cols="12"
          md="6"
          lg="4"
        >
          <b-form-group
            label="Email"
            label-for="email"
          >
            <b-input-group>
              <b-input-group-prepend is-text>
                <feather-icon
                  icon="MailIcon"
                  size="18"
                />
              </b-input-group-prepend>
              <b-form-input
                id="email"
                v-model="userDataInfo.email"
                placeholder="Email"
              />
            </b-input-group>
          </b-form-group>
        </b-col>

        <b-col
          cols="12"
          md="6"
          lg="4"
          offset-lg="1"
        >
          <b-form-group
            label="Linkedin"
            label-for="linkedin"
          >
            <b-input-group>
              <b-input-group-prepend is-text>
                <feather-icon
                  icon="LinkedinIcon"
                  size="18"
                />
              </b-input-group-prepend>
              <b-form-input
                id="linkedin"
                v-model="userDataInfo.linkedin"
                placeholder="Linkedin"
              />
            </b-input-group>
          </b-form-group>
        </b-col>

        <b-col
          cols="12"
          md="6"
          lg="4"
        >
          <b-form-group
            label="Telegram"
            label-for="telegram"
          >
            <b-input-group>
              <b-input-group-prepend is-text>
                <feather-icon
                  icon="SendIcon"
                  size="18"
                />
              </b-input-group-prepend>
              <b-form-input
                id="telegram"
                v-model="userDataInfo.telegram"
                placeholder="Telegram"
              />
            </b-input-group>
          </b-form-group>
          <a
            href="#"
            class="text-secondary d-block mb-1"
          >
            <feather-icon
              icon="LinkIcon"
              size="14"
            />
            Чат бот привязан</a>
        </b-col>

        <b-col
          cols="12"
          md="6"
          lg="4"
          offset-lg="1"
        >
          <b-form-group
            label="Twitter"
            label-for="twitter"
          >
            <b-input-group>
              <b-input-group-prepend is-text>
                <feather-icon
                  icon="TwitterIcon"
                  size="18"
                />
              </b-input-group-prepend>
              <b-form-input
                id="twitter"
                v-model="userDataInfo.twitter"
                placeholder="Twitter"
              />
            </b-input-group>
          </b-form-group>
        </b-col>

        <b-col
          cols="12"
          md="6"
          lg="4"
        >
          <b-form-group
            label="Instagram"
            label-for="instagram"
          >
            <b-input-group>
              <b-input-group-prepend is-text>
                <feather-icon
                  icon="InstagramIcon"
                  size="18"
                />
              </b-input-group-prepend>
              <b-form-input
                id="instagram"
                v-model="userDataInfo.instagram"
                placeholder="Instagram"
              />
            </b-input-group>
          </b-form-group>
        </b-col>

      </b-row>

    </b-form>
  </div>
</template>

<script>
import {
  BRow, BCol, BForm, BFormGroup, BFormInput, BInputGroupPrepend, BInputGroup,
} from 'bootstrap-vue'
import { ref } from '@vue/composition-api'
// import vSelect from 'vue-select'
import FormSearchRepeat from '@/anworks/components/FormSearchRepeat.vue'

export default {
  components: {
    BRow, BCol, BForm, BFormGroup, BFormInput, FormSearchRepeat, BInputGroupPrepend, BInputGroup,
  },
  setup() {
    const userDataInfo = ref({
      facebook: 'https://www.facebook.com/eleanor',
      viber: '+380991112233',
      linkedin: 'https://linkedin.com/eleanor',
      email: 'emailapplicant@mail.com',
      twitter: 'https://www.twitter.com/eleanor',
      telegram: '@emailapplicant',
      instagram: 'https://Instagram.com/eleanor',
    })

    return {
      userDataInfo,
    }
  },
}
</script>
