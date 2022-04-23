<template>
    <el-card class="main-card">
        <div class="title">{{ this.$route.name }}</div>
        <!-- 表格操作 -->
        <div class="operation-container">
            <el-button
                    type="danger"
                    size="small"
                    icon="el-icon-delete"
                    :disabled="chatRecordIdList.length === 0"
                    @click="deleteFlag = true"
            >
                批量删除
            </el-button>
        </div>
        <!-- 表格展示 -->
        <el-table
                border
                v-loading="loading"
                :data="chatRecordList"
                @selection-change="selectionChange"
        >
            <!-- 表格列 -->
            <el-table-column type="selection" width="55" />
            <el-table-column prop="avatar" label="头像" align="center" width="150">
                <template slot-scope="scope">
                    <img :src="scope.row.avatar" width="40" height="40" />
                </template>
            </el-table-column>
            <el-table-column
                    prop="nickname"
                    label="聊天昵称"
                    align="center"
                    width="150"
            />
            <el-table-column prop="content" label="聊天内容" align="center">
                <template slot-scope="scope">
                    <span v-html="scope.row.content" class="comment-content" />
                </template>
            </el-table-column>
            <el-table-column
                    prop="ipAddress"
                    label="ip地址"
                    align="center"
                    width="190"
            />
            <el-table-column
                    prop="ipSource"
                    label="ip来源"
                    align="center"
                    width="90"
            />
            <el-table-column
                    prop="createTime"
                    label="发布时间"
                    width="230"
                    align="center"
            >
                <template slot-scope="scope">
                    <i class="el-icon-time" style="margin-right:5px" />
                    {{ scope.row.createTime | dateTime }}
                </template>
            </el-table-column>
            <!-- 列操作 -->
            <el-table-column label="操作" width="160" align="center">
                <template slot-scope="scope">
                    <el-popconfirm
                            style="margin-left:10px"
                            title="确定删除吗？"
                            @confirm="deleteChatRecord(scope.row.id)"
                    >
                        <el-button size="mini" type="danger" slot="reference">
                            删除
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
                :page-sizes="[5,10,30,50,100]"
                layout="total, sizes, prev, pager, next, jumper"
        />
        <!-- 批量删除对话框 -->
        <el-dialog :visible.sync="deleteFlag" width="30%" :close-on-click-modal="false">
            <div class="dialog-title-container" slot="title">
                <i class="el-icon-warning" style="color:#ff9900" />提示
            </div>
            <div style="font-size:1rem">是否删除选中项？</div>
            <div slot="footer">
                <el-button @click="deleteFlag = false">取 消</el-button>
                <el-button type="primary" @click="deleteChatRecord(null)">
                    确 定
                </el-button>
            </div>
        </el-dialog>
    </el-card>
</template>

<script>
    import {deleteChatRecord, getChatRecordList} from "../../api/system";

    export default {
        name: "Chat",
        data() {
            return {
                loading: true,
                deleteFlag: false,
                chatRecordIdList: [],
                chatRecordList: [],
                keywords: null,
                isReview: null,
                current: 1,
                size: 10,
                count: 0
            }
        },
        created() {
            this.getList()
        },
        methods: {
            getList() {
                const params = {
                    current: this.current,
                    size: this.size,
                };
                getChatRecordList(params).then(res => {
                    this.chatRecordList = res.data.data.recordList;
                    this.count = res.data.data.count;
                    this.loading = false;
                })
            },
            selectionChange(chatRecordList) {
                this.chatRecordIdList = [];
                chatRecordList.forEach(item => {
                    this.chatRecordIdList.push(item.id);
                });
            },
            searchMessages() {
                this.current = 1;
                this.getList();
            },
            sizeChange(size) {
                this.size = size;
                this.getList();
            },
            currentChange(current) {
                this.current = current;
                this.getList();
            },
            deleteChatRecord(id) {
                let param = {};
                if (id != null) {
                    param = { data: [id] };
                } else {
                    param = { data: this.chatRecordIdList };
                }
                deleteChatRecord(param.data).then(({ data }) => {
                    if (data.flag) {
                        this.$notify.success({
                            title: "成功",
                            message: data.message
                        });
                        this.getList();
                    } else {
                        this.$notify.error({
                            title: "失败",
                            message: data.message
                        });
                    }
                    this.deleteFlag = false;
                });
            },
        }
    }
</script>

<style scoped>
    .comment-content {
        display: inline-block;
    }
</style>
