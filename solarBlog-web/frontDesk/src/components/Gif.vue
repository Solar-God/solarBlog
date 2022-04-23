<template>
    <div v-show="chooseGif" class="gif-wrapper">
    <span
            class="gif-item"
            v-for="(value, key, index) of gifList"
            :key="index"
            @click="addGif(key)"
    >
      <v-img
              :lazy-src="value"
              :src="value"
              :title="key"
              class="gif"
              width="90"
              height="90"
      />
    </span>
    </div>
</template>

<script>
    import Gif from "../assets/js/gif";
    export default {
        name: "Gif",
        props: {
            chooseGif: {
                type: Boolean
            }
        },
        data() {
            return {
                gifList: Gif
            }
        },
        methods: {
            addGif(key) {
                this.$emit("addGif", key)
            }
        }
    }
</script>

<style scoped>
    .gif {
        user-select: none;
        margin: 0.25rem;
        display: inline-block;
        vertical-align: middle;
    }
    .gif-item {
        cursor: pointer;
        display: inline-block;
    }
    .gif-item:hover {
        transition: all 0.2s;
        border-radius: 0.25rem;
        background: #dddddd;
    }
    .gif-wrapper {
        max-height: 150px;
        overflow-y: auto;
    }
</style>
