<template>
  <div>
    <!-- 归档列表 -->
    <v-card class="blog-container">
      <timeline>
        <timeline-title style="color: #03a9f4"> 目前共计{{ count }}篇文章，继续加油 </timeline-title>
        <timeline-item v-for="item of archiveList" :key="item.id">
          <!-- 日期 -->
          <span class="time">{{ item.createTime | date }}</span>
          <!-- 文章标题 -->
          <router-link
            :to="'/articles/' + item.id"
          >
            {{ item.articleTitle }}
          </router-link>
        </timeline-item>
      </timeline>
      <!-- 分页按钮 -->
      <v-pagination
        color="#00C4B6"
        v-model="current"
        :length="Math.ceil(count / 10)"
        total-visible="7"
      />
    </v-card>
  </div>
</template>

<script>
import { Timeline, TimelineItem, TimelineTitle } from "vue-cute-timeline";
import {getArchives} from "../../api/article";
export default {
  created() {
    this.listArchives();
  },
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle
  },
  data: function() {
    return {
      current: 1,
      count: 0,
      archiveList: []
    };
  },
  methods: {
    listArchives() {
      getArchives({current: this.current}).then(res => {
        this.archiveList = res.data.recordList;
        this.count = res.data.count;
      });
    }
  },
  watch: {
    current(value) {
      getArchives({current: value}).then(res => {
        this.archiveList = res.data.recordList;
        this.count = res.data.count;
      })
    }
  }
};
</script>

<style scoped>
  .time {
  font-size: 0.75rem;
  color: steelblue;
  margin-right: 1rem;
}
</style>
