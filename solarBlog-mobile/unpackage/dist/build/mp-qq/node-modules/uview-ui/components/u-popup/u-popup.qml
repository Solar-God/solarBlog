<view class="u-popup data-v-1a167540"><block qq:if="{{overlay}}"><u-overlay vue-id="09412c8d-1" show="{{show}}" duration="{{overlayDuration}}" customStyle="{{overlayStyle}}" opacity="{{overlayOpacity}}" data-event-opts="{{[['^click',[['overlayClick']]]]}}" bind:click="__e" class="data-v-1a167540" bind:__l="__l"></u-overlay></block><u-transition vue-id="09412c8d-2" show="{{show}}" customStyle="{{transitionStyle}}" mode="{{position}}" duration="{{duration}}" data-event-opts="{{[['^afterEnter',[['afterEnter']]],['^click',[['clickHandler']]]]}}" bind:afterEnter="__e" bind:click="__e" class="data-v-1a167540" bind:__l="__l" vue-slots="{{['default']}}"><view data-event-opts="{{[['tap',[['noop',['$event']]]]]}}" class="u-popup__content data-v-1a167540" style="{{$root.s0}}" catchtap="__e"><block qq:if="{{safeAreaInsetTop}}"><u-status-bar vue-id="{{('09412c8d-3')+','+('09412c8d-2')}}" class="data-v-1a167540" bind:__l="__l"></u-status-bar></block><slot></slot><block qq:if="{{closeable}}"><view class="{{['u-popup__content__close','data-v-1a167540','u-popup__content__close--'+closeIconPos]}}" hover-class="u-popup__content__close--hover" hover-stay-time="150" data-event-opts="{{[['tap',[['close',['$event']]]]]}}" catchtap="__e"><u-icon vue-id="{{('09412c8d-4')+','+('09412c8d-2')}}" name="close" color="#909399" size="18" bold="{{true}}" class="data-v-1a167540" bind:__l="__l"></u-icon></view></block><block qq:if="{{safeAreaInsetBottom}}"><u-safe-bottom vue-id="{{('09412c8d-5')+','+('09412c8d-2')}}" class="data-v-1a167540" bind:__l="__l"></u-safe-bottom></block></view></u-transition></view>