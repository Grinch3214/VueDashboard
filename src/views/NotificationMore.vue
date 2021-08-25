<template>
  <div class="card bg-white p-2">
    <b-tabs pills>
      <b-tab
        title="Уведомления"
        active
      >
        <div class="notificationcard border-bottom row align-items-center">
          <div class="notificationcard__img d-flex align-items-center col-9 p-1">
            <span class="h4 mb-0">Новые</span>
          </div>
          <div class="notificationcard__date col-3">
            <span class="h4 mb-0">Дата и время</span>
          </div>
        </div>
        <div class="notificationcard border-bottom row align-items-center">
          <div class="notificationcard__img d-flex align-items-center col-9 p-1">
            <b-avatar
              size="70px"
              :src="require('@/assets/images/portrait/small/avatar-s-20.jpg')"
            />
            <p class="ml-2 h5">Congratulate Sam for work update 🎉</p>
          </div>
          <div class="notificationcard__date col-3">
            <span>15.06.2021 в 17:49</span>
          </div>
        </div>
        <div class="notificationcard border-bottom row align-items-center">
          <div class="notificationcard__img d-flex align-items-center col-9 p-1">
            <b-avatar
              size="70px"
              variant="light-primary"
              text="PI"
            />
            <p class="ml-2 h5">New Customer is registered 👏🏻</p>
          </div>
          <div class="notificationcard__date col-3">
            <span>15.06.2021 в 17:49</span>
          </div>
        </div>
        <div class="notificationcard border-bottom row align-items-center">
          <div class="notificationcard__img d-flex align-items-center col-9 p-1">
            <b-avatar
              size="70px"
              :src="require('@/assets/images/portrait/small/avatar-s-20.jpg')"
            />
            <p class="ml-2 h5">Congratulate Sam for work update 🎉</p>
          </div>
          <div class="notificationcard__date col-3">
            <span>15.06.2021 в 17:49</span>
          </div>
        </div>
        <div class="notificationcard border-bottom row align-items-center">
          <div class="notificationcard__img d-flex align-items-center col-12 p-1">
            <span class="h4 mb-0">Ранее</span>
          </div>
        </div>
        <div class="notificationcard border-bottom row align-items-center">
          <div class="notificationcard__img d-flex align-items-center col-9 p-1">
            <b-avatar
              size="70px"
              variant="light-primary"
              :src="require('@/assets/images/avatars/testImg.png')"
            />
            <p class="ml-2 h5">New Customer is registered 👏🏻</p>
          </div>
          <div class="notificationcard__date col-3">
            <span>15.06.2021 в 17:49</span>
          </div>
        </div>

        <template>
          <div class="d-flex justify-content-between align-items-center mt-2">
            <span class="text-muted">Showing 1 to 10 of 50 entries</span>
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              first-number
              last-number
              prev-class="prev-item"
              next-class="next-item"
              class="mb-0"
            >
              <template #prev-text>
                <feather-icon
                  icon="ChevronLeftIcon"
                  size="18"
                />
              </template>
              <template #next-text>
                <feather-icon
                  icon="ChevronRightIcon"
                  size="18"
                />
              </template>
            </b-pagination>
          </div>
        </template>
      </b-tab>
      <b-tab title="Второй таб">
        <b-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatibus quas nam temporibus a quis expedita similique ratione! A cum voluptate, temporibus architecto blanditiis velit voluptatem corrupti quisquam porro est delectus doloremque, beatae nesciunt repellendus non accusamus numquam perferendis asperiores aspernatur nulla. Et sed distinctio, tenetur necessitatibus eaque laborum! Aperiam dolorum doloremque velit repellendus similique vel soluta iusto reiciendis quod laborum. In corporis eligendi vero reprehenderit quasi voluptatibus dicta alias accusantium, omnis iusto voluptas nam quam architecto consequuntur eaque placeat ducimus aut ullam facilis possimus labore. Praesentium aliquid voluptates inventore!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint voluptatum, officiis sit voluptatem commodi. Magnam error quae veniam ipsum qui labore doloremque natus asperiores aspernatur et, quam consequuntur commodi dolorem perspiciatis illo reprehenderit dignissimos amet nesciunt porro velit nisi! Voluptates ipsum ipsam voluptas minima corrupti animi vitae iusto dolores illum autem laboriosam nesciunt repudiandae repellendus natus mollitia neque ea, consectetur, soluta vel officia distinctio cupiditate maxime. Temporibus illo nostrum cumque ducimus accusamus quos illum necessitatibus, molestiae beatae quibusdam obcaecati possimus impedit minima nulla. Harum debitis facere, ut in accusamus fuga adipisci sit error laudantium neque id cupiditate eaque modi exercitationem, amet temporibus consectetur sequi corrupti! Blanditiis culpa veritatis nostrum praesentium voluptatem! Quae ipsum ipsa possimus similique doloribus, illum repellendus.
        </b-card-text>
      </b-tab>
      <b-tab title="Третий таб">
        <b-card-text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente error esse cupiditate dicta eaque quia? Repellendus eaque quas iusto maiores excepturi impedit fugit numquam, ipsa natus voluptates eveniet laborum ad obcaecati nostrum ex dolore nihil iure quaerat placeat amet corrupti accusamus. Nulla recusandae atque, a quae eos maiores ratione et.
        </b-card-text>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import {
  BTabs, BTab, BCardText, BAvatar, BPagination,
} from 'bootstrap-vue'

export default {
  components: {
    BTabs,
    BTab,
    BCardText,
    BAvatar,
    BPagination,
  },
  data: () => ({
    currentPage: 1,
    perPage: 1,
    rows: 100,
  }),
}
</script>
