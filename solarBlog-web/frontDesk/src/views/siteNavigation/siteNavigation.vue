<template>
    <div class="blog-container">
        <v-card class="siteContainer" v-for="item in siteList" :key="item.tagsName">
            <h2>
                <strong>{{ item.tagsName }}</strong>
            </h2>
            <v-row class="items">
                <div class="item" v-for="site in item.siteNavList" :key="site.webSiteName" ref="item">
                    <v-col :order-xl="12" :order-sm="8" :order-md="6" :order-lg="8">
                        <a :href="site.webSiteUrl" target="_blank">
                            <img :src="site.webSiteIcon" :alt="site.webSiteName" />
                            <h3>{{ site.webSiteName }}</h3>
                            <p v-if="site.webSiteDesc">{{ site.webSiteDesc }}</p>
                        </a>
                    </v-col>
                </div>
            </v-row>
        </v-card>
    </div>
</template>

<script>
    import {getSiteNavList} from "../../api/user";

    export default {
        name: "siteNavigation.vue",
        data() {
            return {
                siteList: [{
                        tagsName: undefined,
                        siteNavList: [{
                            webSiteName: undefined,
                            webSiteUrl: undefined,
                            webSiteIcon: undefined,
                            webSiteDesc: undefined},
                        ]},]
            }
        },
        created() {
            this.getSiteList()
        },
        methods: {
            getSiteList() {
                getSiteNavList().then(res => {
                    console.log(res)
                    if (res.code === 200) {
                        this.siteList = res.data
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    @media (min-width: 760px) {
        .blog-container {
            animation: main 1s;
            max-width: 1180px;
            padding: 0 40px;
            margin: 30px auto 40px auto;
        }
    }
    @media (max-width: 759px) {
        .blog-container {
            animation: main 1s;
            margin: 30px 5px 20px 5px;
            padding: 0 2rem;
        }
    }
    .siteContainer {
        background: #fff;
        margin-top: 3rem;
        h2 {
            padding: 0.9rem;
            border-bottom: 1px solid #f1f4f9;
            font-size: 16px;
            background-color: rgb(249, 216, 118);
            border-radius: 0.5rem;
        }
        .items {
            padding: 2rem;
            .item {
                width: 13rem;
                height: auto;
                a {
                    display: block;
                    width: 100%;
                    padding: 14px 8%;
                    box-sizing: border-box;
                    transition: none;
                    border-radius: 1rem;
                    &:hover {
                        background-color: #f2f8fd;
                        h3 {
                            color: #f20c00;
                        }
                        p {
                            color: #525252;
                        }
                    }
                    img {
                        float: left;
                        width: 26px;
                        height: 26px;
                        border-radius: 100%;
                    }
                    h3 {
                        margin-left: 32px;
                        color: #3c3c3c;
                        font-size: 14px;
                        white-space: nowrap;
                        height: 26px;
                        line-height: 26px;
                        margin-bottom: 4px;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                    p {
                        color: #8f8f8f;
                        font-size: 12px;
                        height: 3em;
                        line-height: 1.5em;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                }
            }
        }
    }
</style>
