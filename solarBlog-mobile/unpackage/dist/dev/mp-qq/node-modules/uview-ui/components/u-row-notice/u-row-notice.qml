<view data-event-opts="{{[['tap',[['clickHandler',['$event']]]]]}}" class="u-notice data-v-4661e472" bindtap="__e"><block qq:if="{{$slots.icon}}"><slot name="icon"></slot></block><block qq:else><block qq:if="{{icon}}"><view class="u-notice__left-icon data-v-4661e472"><u-icon vue-id="56807603-1" name="{{icon}}" color="{{color}}" size="19" class="data-v-4661e472" bind:__l="__l"></u-icon></view></block></block><view data-ref="u-notice__content" class="u-notice__content data-v-4661e472 vue-ref"><text data-ref="u-notice__content__text" class="u-notice__content__text data-v-4661e472 vue-ref" style="{{$root.s0}}">{{text}}</text></view><block qq:if="{{$root.g0}}"><view class="u-notice__right-icon data-v-4661e472"><block qq:if="{{mode==='link'}}"><u-icon vue-id="56807603-2" name="arrow-right" size="{{17}}" color="{{color}}" class="data-v-4661e472" bind:__l="__l"></u-icon></block><block qq:if="{{mode==='closable'}}"><u-icon vue-id="56807603-3" name="close" size="{{16}}" color="{{color}}" data-event-opts="{{[['^click',[['close']]]]}}" bind:click="__e" class="data-v-4661e472" bind:__l="__l"></u-icon></block></view></block></view>