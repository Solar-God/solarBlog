<template>
    <el-card class="main-card">
        <el-tabs v-model="activeName" @tab-click="changeTabs()">
            <el-tab-pane label="网站列表" name="webSiteList">
                <div>
                    <el-form ref="listQuery" :model="webSiteListQuery">
                        <el-col :lg="5" :xl="5">
                            <el-form-item label="网站名称" label-width="90px">
                                <el-input v-model.trim="webSiteListQuery.webSiteName" placeholder="网站名称" style="width: 100%;"/>
                            </el-form-item>
                        </el-col>
                        <el-col :lg="5" :xl="5">
                            <el-form-item label="网站类型" prop="webSiteTags" label-width="90px">
                                <el-select @change="handleFilter()" v-model="webSiteListQuery.tagsId" placeholder="请选择网站类型" clearable>
                                    <el-option
                                            v-for="item in tagsOptions"
                                            :key="item.id"
                                            :label="item.tagsName"
                                            :value="item.id"
                                    ></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-button style="margin-left: 10px" type="primary" icon="el-icon-search" @click="handleFilter()">搜索</el-button>
                        <el-button type="primary" icon="el-icon-plus" @click="handleCreateWebSite">添加网站</el-button>
                    </el-form>
                </div>
                <el-table
                        :data="webSiteList"
                        border
                        v-loading="webSiteLoading"
                        highlight-current-row
                >
                    <el-table-column label="网站图标" align="center">
                        <template slot-scope="{row}">
                            <img :src="row.webSiteIcon" width="50px" height="50px" style="cursor: pointer"/>
                        </template>
                    </el-table-column>
                    <el-table-column label="网站名称" align="center" prop="webSiteName"/>
                    <el-table-column label="网站链接" align="center" width="330">
                        <template slot-scope="{row}">
                            <a :href="row.webSiteUrl"
                               target="_blank"
                               class="buttonText">{{row.webSiteUrl}}</a>
                        </template>
                    </el-table-column>
                    <el-table-column label="网站类别" align="center" width="130">
                        <template slot-scope="scope">
                            <div slot="reference" class="name-wrapper">
                                <el-tag>{{ scope.row.tagsName }}</el-tag>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="网站排序" align="center" width="90">
                        <template slot-scope="scope">
                            <div slot="reference" class="name-wrapper">
                                <el-select v-model="scope.row.orderNum" placeholder="" disabled filterable clearable>
                                    <el-option
                                            v-for="item in orderOptions"
                                            :key="item"
                                            :label="item"
                                            :value="item"
                                    ></el-option>
                                </el-select>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="创建日期" align="center" width="130">
                        <template slot-scope="scope">
                            <div slot="reference" class="name-wrapper">
                                <i class="el-icon-time" style="margin-right:5px" />
                                {{ scope.row.createTime | date }}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center" width="190">
                        <template slot-scope="{row}">
                            <el-button type="primary" size="mini" @click="handleUpdateWebSite(row)">编辑</el-button>
                            <el-popconfirm
                                    title="确定删除吗？"
                                    style="margin-left:1rem"
                                    @confirm="handleDeleteWebSite(row.id)"
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
                        @size-change="siteSizeChange"
                        @current-change="siteCurrentChange"
                        :current-page="webSiteListQuery.current"
                        :page-size="webSiteListQuery.size"
                        :total="webSiteListQuery.count"
                        :page-sizes="[5,10,30,50,100]"
                        layout="total, sizes, prev, pager, next, jumper"
                />
                <!-- 添加或修改网站对话框 -->
                <el-dialog :title="webSiteTitleMap[webSiteTitleStatus]" :visible.sync="webSiteVisible" width="600px" :close-on-click-modal="false" append-to-body>
                    <el-form ref="webSiteForm" :rules="webSiteFormRules" :model="webSiteForm" label-width="80px">
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="网站名称" prop="platform">
                                    <el-input v-model="webSiteForm.webSiteName" placeholder="请输入网站名称"/>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="网站类型" prop="webSiteTags">
                                    <el-select v-model="webSiteForm.tagsId" placeholder="请选择网站类型" clearable>
                                        <el-option
                                                v-for="item in tagsOptions"
                                                :key="item.id"
                                                :label="item.tagsName"
                                                :value="item.id"
                                        ></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <el-form-item label="网站图标" prop="platformUrl">
                                    <el-input v-model="webSiteForm.webSiteIcon" placeholder="请输入网站图标链接"/>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <el-form-item label="网站链接" prop="platformUrl">
                                    <el-input v-model="webSiteForm.webSiteUrl" placeholder="请输入网站链接"/>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <el-form-item label="网站描述" prop="webSiteDesc">
                                    <el-input v-model="webSiteForm.webSiteDesc" placeholder="请输入网站描述"/>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="网站排序" prop="orderNum">
                                    <el-select v-model="webSiteForm.orderNum" placeholder="请选择网站排序" filterable clearable>
                                        <el-option
                                                v-for="item in orderOptions"
                                                :key="item"
                                                :label="item"
                                                :value="item"
                                        ></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="webSiteVisible = false">
                            取消
                        </el-button>
                        <el-button type="primary" @click="saveOrUpdateWebSiteData()">
                            确认
                        </el-button>
                    </div>
                </el-dialog>
            </el-tab-pane>
            <el-tab-pane label="网站标签" name="webSiteCategory">
                <div style="display: flex;justify-content: right;margin-bottom: 10px">
                    <el-button type="primary" icon="el-icon-plus" @click="handleCreateTags">添加网站标签</el-button>
                </div>
                <el-table
                        :data="siteTagsList"
                        border
                        v-loading="siteTagsLoading"
                        highlight-current-row
                >
                    <el-table-column label="标签名称" align="center" >
                        <template slot-scope="{row}">
                            <div slot="reference" class="name-wrapper">
                                <el-tag @click="handleUpdateTags(row)" style="cursor: pointer">{{ row.tagsName }}</el-tag>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="网站排序" align="center" width="90">
                        <template slot-scope="scope">
                            <div slot="reference" class="name-wrapper">
                                <el-select v-model="scope.row.orderNum" placeholder="" disabled filterable clearable>
                                    <el-option
                                            v-for="item in orderOptions"
                                            :key="item"
                                            :label="item"
                                            :value="item"
                                    ></el-option>
                                </el-select>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="更新日期" align="center">
                        <template slot-scope="scope">
                            <div slot="reference" class="name-wrapper">
                                <i class="el-icon-time" style="margin-right:5px" />
                                {{ scope.row.updateTime | date }}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="创建日期" align="center">
                        <template slot-scope="scope">
                            <div slot="reference" class="name-wrapper">
                                <i class="el-icon-time" style="margin-right:5px" />
                                {{ scope.row.createTime | date }}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center" width="190">
                        <template slot-scope="{row}">
                            <el-button type="primary" size="mini" @click="handleUpdateTags(row)">编辑</el-button>
                            <el-popconfirm
                                    title="确定删除吗？"
                                    style="margin-left:1rem"
                                    @confirm="handleDeleteTags(row.id)"
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
                        @size-change="tagsSizeChange"
                        @current-change="tagsCurrentChange"
                        :current-page="tagsListQuery.current"
                        :page-size="tagsListQuery.size"
                        :total="tagsListQuery.count"
                        :page-sizes="[5,10,30,50,100]"
                        layout="total, sizes, prev, pager, next, jumper"
                />
                <!-- 添加或修改标签对话框 -->
                <el-dialog :title="tagsTitleMap[tagsTitleStatus]" :visible.sync="tagsVisible" width="30%" :close-on-click-modal="false" append-to-body>
                    <el-form ref="tagsForm" :rules="tagsFormRules" :model="tagsForm" label-width="80px">
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="标签名称" prop="account">
                                    <el-input style="width: 220px" v-model="tagsForm.tagsName" placeholder="请输入标签名称" />
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="网站排序" prop="orderNum">
                                    <el-select v-model="tagsForm.orderNum" placeholder="请选择网站排序" style="width: 220px" filterable clearable>
                                        <el-option
                                                v-for="item in orderOptions"
                                                :key="item"
                                                :label="item"
                                                :value="item"
                                        ></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="tagsVisible = false">
                            取消
                        </el-button>
                        <el-button type="primary" @click="saveOrUpdateTags()">
                            确认
                        </el-button>
                    </div>
                </el-dialog>
            </el-tab-pane>
        </el-tabs>
    </el-card>
</template>

<script>
    import {
        deleteSiteNav, deleteSiteTags,
        getAdminSiteNavList,
        getAdminSiteTagsList,
        saveOrUpdateSiteNav, saveOrUpdateSiteNavTags
    } from "../../api/system";

    export default {
        name: "siteNavigation",
        data(){
            return {
                activeName: "webSiteList",
                // 网站列表
                webSiteListQuery: {
                    current: 1,
                    size: 10,
                    count: 0,
                    webSiteName: undefined,
                    tagsId: undefined
                },
                webSiteVisible: false,
                webSiteFormRules: {},
                webSiteForm: {
                    tagsId: undefined,
                },
                webSiteTitleMap: {
                    create: '创建网站',
                    update: '编辑网站'
                },
                webSiteTitleStatus : undefined,
                webSiteList:[],
                webSiteLoading: false,
                tagsOptions:[],
                orderOptions:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
                // 标签列表
                tagsListQuery: {
                    current: 1,
                    size: 10,
                    count: 0,
                },
                siteTagsList: [],
                siteTagsLoading: false,
                tagsTitleMap: {
                    create: '创建标签',
                    update: '编辑标签'
                },
                tagsTitleStatus : undefined,
                tagsForm: {
                    tagsName: undefined
                },
                tagsFormRules:{},
                tagsVisible: false
            }
        },
        created() {
            this.getAdminSiteNavList()
            this.getAdminTagsList()
        },
        methods:{
            getAdminSiteNavList() {
                getAdminSiteNavList(this.webSiteListQuery).then(res => {
                    if (res.data.code === 200) {
                        setTimeout(() => {
                            this.webSiteLoading =false
                        },300)
                        this.webSiteList = res.data.data
                        this.webSiteListQuery.count = res.data.count
                        this.webSiteLoading = true
                    }
                })
            },
            getAdminTagsList() {
                getAdminSiteTagsList(this.tagsListQuery).then(res => {
                    if (res.data.code === 200) {
                        this.siteTagsLoading = true
                        setTimeout(() => {
                            this.siteTagsLoading =false
                        },300)
                        this.siteTagsList = res.data.data
                        this.tagsOptions = res.data.data
                        this.tagsListQuery.count = res.data.count
                    }
                })
            },
            changeTabs(tab) {
                console.log(tab)
            },
            handleFilter() {
                this.getAdminSiteNavList()
            },
            handleCreateWebSite() {
                this.webSiteForm = {}
                this.webSiteTitleStatus = 'create'
                this.webSiteForm.submitType = this.webSiteTitleStatus
                this.webSiteVisible = true
            },
            handleUpdateWebSite(row) {
                this.webSiteForm = JSON.parse(JSON.stringify(row))
                this.webSiteTitleStatus = 'update'
                this.webSiteForm.submitType = this.webSiteTitleStatus
                this.webSiteVisible = true
            },
            saveOrUpdateWebSiteData() {
                saveOrUpdateSiteNav(this.webSiteForm).then(res => {
                    if (res.data.code === 200) {
                        this.getAdminSiteNavList()
                        this.webSiteVisible = false
                        this.$notify.success({
                            title: "成功",
                            message: res.data.message
                        })
                    } else {
                        this.$notify.error({
                            title: "失败",
                            message: res.data.message
                        })
                    }
                })
            },
            handleDeleteWebSite(id) {
                deleteSiteNav([id]).then(res => {
                    if (res.data.code === 20000) {
                        this.getAdminSiteNavList()
                        this.$notify.success({
                            title: "成功",
                            message: res.data.message
                        })
                    } else {
                        this.$notify.error({
                            title: "失败",
                            message: res.data.message
                        })
                    }
                })
            },
            handleCreateTags() {
                this.tagsForm = {}
                this.tagsTitleStatus = 'create'
                this.tagsVisible = true
            },
            handleUpdateTags(row) {
                this.tagsForm = row
                this.tagsTitleStatus = 'update'
                this.tagsVisible = true
            },
            saveOrUpdateTags() {
              saveOrUpdateSiteNavTags(this.tagsForm).then(res => {
                  if (res.data.code === 20000) {
                      this.getAdminTagsList()
                      this.$notify.success({
                          title: "成功",
                          message: res.data.message
                      })
                      this.tagsVisible = false
                  } else {
                      this.$notify.error({
                          title: "失败",
                          message: res.data.message
                      })
                  }
              })
            },
            handleDeleteTags(id) {
                deleteSiteTags([id]).then(res => {
                    if (res.data.code === 20000) {
                        this.getAdminTagsList()
                        this.$notify.success({
                            title: "成功",
                            message: res.data.message
                        })
                    } else {
                        this.$notify.error({
                            title: "失败",
                            message: res.data.message
                        })
                    }
                })
            },
            siteSizeChange(size) {
                this.webSiteListQuery.size = size
                this.getAdminSiteNavList()
            },
            siteCurrentChange(current) {
                this.webSiteListQuery.current = current
                this.getAdminSiteNavList()
            },
            tagsSizeChange(size) {
                this.tagsListQuery.size = size
                this.getAdminTagsList()
            },
            tagsCurrentChange(current) {
                this.tagsListQuery.current = current
                this.getAdminTagsList()
            }
        }
    }
</script>

<style scoped>

</style>
