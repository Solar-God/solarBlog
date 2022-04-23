<template>
  <el-card class="main-card">
    <!-- 标题 -->
    <div class="title">{{ this.$route.name }}</div>
    <div class="operation-container">
      <el-button
        type="danger"
        size="small"
        icon="el-icon-delete"
        :disabled="this.logIdList.length === 0"
        @click="isDelete = true"
      >
        批量删除
      </el-button>
      <!-- 数据筛选 -->
      <div style="margin-left:auto">
        <el-input
          v-model="keywords"
          prefix-icon="el-icon-search"
          size="small"
          placeholder="请输入用户昵称"
          style="width:200px"
          @keyup.enter.native="searchLogs"
        />
        <el-button
          type="primary"
          size="small"
          icon="el-icon-search"
          style="margin-left:1rem"
          @click="searchLogs"
        >
          搜索
        </el-button>
      </div>
    </div>
    <!-- 登录日志列表 -->
    <el-table
      @selection-change="selectionChange"
      v-loading="loading"
      :data="logList"
    >
      <el-table-column type="selection" align="center" />
      <el-table-column
        prop="nickname"
        label="用户昵称"
        align="center"
        width="180"
      />
      <el-table-column
              prop="loginType"
              label="登录方式"
              align="center"
      >
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.row.loginType === 1">邮箱</el-tag>
          <el-tag v-if="scope.row.loginType === 2">QQ</el-tag>
          <el-tag type="danger" v-if="scope.row.loginType === 3">微博</el-tag>
          <el-tag type="primary" v-if="scope.row.loginType === 4">微信</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="ipAddress" label="登录ip" align="center" />
      <el-table-column
              prop="ipSource"
              label="登录地址"
              align="center"
              width="90"
      />
      <el-table-column
              prop="browser"
              label="浏览器"
              align="center"
      />
      <el-table-column label="登录状态" align="center" prop="status">
        <template slot-scope="scope">
          <el-tag type="danger" v-if="scope.row.status === 0">失败</el-tag>
          <el-tag type="success" v-if="scope.row.status === 1">成功</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作信息" align="center" prop="message" />
      <el-table-column
              prop="lastLoginTime"
              label="登录时间"
              align="center"
              width="110"
      >
        <template slot-scope="scope">
          {{ scope.row.createTime | dateTime }}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-popconfirm
            title="确定删除吗？"
            style="margin-left:10px"
            @confirm="deleteLog(scope.row.id)"
          >
            <el-button size="mini" type="text" slot="reference">
              <i class="el-icon-delete" /> 删除
            </el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      class="pagination-container"
      background
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page="current"
      :page-size="size"
      :total="count"
      :page-sizes="[10, 30,50,100]"
      layout="total, sizes, prev, pager, next, jumper"
    />
    <!-- 批量删除对话框 -->
    <el-dialog :visible.sync="isDelete" width="30%" :close-on-click-modal="false">
      <div class="dialog-title-container" slot="title">
        <i class="el-icon-warning" style="color:#ff9900" />提示
      </div>
      <div style="font-size:1rem">是否删除选中项？</div>
      <div slot="footer">
        <el-button @click="isDelete = false">取 消</el-button>
        <el-button type="primary" @click="deleteLog(null)">
          确 定
        </el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script>
import {getLoginLogs} from "../../api/system";

export default {
  created() {
    this.listLogs();
  },
  data() {
    return {
      loading: true,
      logList: [],
      logIdList: [],
      keywords: null,
      current: 1,
      size: 10,
      count: 0,
      isCheck: false,
      isDelete: false
    };
  },
  methods: {
    selectionChange(logList) {
      this.logIdList = [];
      logList.forEach(item => {
        this.logIdList.push(item.id);
      });
    },
    searchLogs() {
      this.current = 1;
      this.listLogs();
    },
    sizeChange(size) {
      this.size = size;
      this.listLogs();
    },
    currentChange(current) {
      this.current = current;
      this.listLogs();
    },
    listLogs() {
      const params = {
        current: this.current,
        size: this.size,
        keywords: this.keywords,
      };
      getLoginLogs(params).then(({ data }) => {
        console.log(data)
        this.logList = data.data.recordList;
        this.count = data.data.count;
        this.loading = false;
      });
    },
    deleteLog(id) {
      var param = {};
      if (id != null) {
        param = { data: [id] };
      } else {
        param = { data: this.logIdList };
      }
      this.axios.delete("/api/admin/login/logs", param).then(({ data }) => {
        if (data.flag) {
          this.$notify.success({
            title: "成功",
            message: data.message
          });
          this.listLogs();
        } else {
          this.$notify.error({
            title: "失败",
            message: data.message
          });
        }
        this.isDelete = false;
      });
    },
    check(optLog) {
      this.optLog = JSON.parse(JSON.stringify(optLog));
      this.isCheck = true;
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold !important;
}
</style>
