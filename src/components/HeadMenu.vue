<template>
  <q-list>
      <q-btn-dropdown
        flat
        stretch
        auto-close
        class="text-bold"
        :label="showTitle ? titles[0] : ''"
        :icon="icon ? icons[0] : ''">
        <q-list>
          <q-item v-for="item in ['card view','tab panel','stepper']" v-bind:key="item" @click="handleItemClicked(item)" clickable v-close-popup>
            <q-item-section>
              <q-item-label>{{item}}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    <q-separator color="gray" :vertical="$q.screen.gt.xs" />
    <q-btn-dropdown
      flat
      stretch
      auto-close
      class="text-bold"
      :label="showTitle ? titles[1] : ''"
      :icon="icon ? icons[1] : ''">
      <q-list>
        <q-item v-for="item in ['card view','tab panel','stepper']" v-bind:key="item" @click="handleItemClicked(item)" clickable v-close-popup>
          <q-item-section>
            <q-item-label>{{item}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </q-list>
</template>

<script>
export default {
  name: 'HeadMenu',
  data () {
    return {
      titles: [
        'title1',
        'title2'
      ],
      icons: [
        'drafts',
        'markunread'
      ]
    }
  },
  computed: {
    icon () {
      return this.$q.screen.gt.md || this.$q.screen.lt.md
    },
    showTitle () {
      return this.$q.screen.gt.sm || this.$q.screen.lt.sm
    }
  },
  methods: {
    handleItemClicked (item) {
      switch (item) {
        case 'card view':
          this.$router.push('/')
          break
        case 'stepper':
          this.$router.push('/stepper')
          break
        case 'tab panel':
          this.$router.push('/tab-panel')
          break
        case 'my form':
          this.$router.push('/my-form')
          break
      }
    }
  }
}
</script>

<style scoped>
</style>
