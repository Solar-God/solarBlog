<block qq:if="{{show}}"><view data-event-opts="{{[['tap',[['clickHandler',['$event']]]]]}}" class="{{['u-text','data-v-62fa03d6']}}" style="{{'margin:'+(margin)+';'+('justify-content:'+(align==='left'?'flex-start':align==='center'?'center':'flex-end')+';')}}" bindtap="__e"><block qq:if="{{mode==='price'}}"><text class="{{['data-v-62fa03d6','u-text__price',type&&'u-text__value--'+type]}}" style="{{$root.s0}}">￥</text></block><block qq:if="{{prefixIcon}}"><view class="u-text__prefix-icon data-v-62fa03d6"><u-icon vue-id="47ad587a-1" name="{{prefixIcon}}" customStyle="{{$root.g0}}" class="data-v-62fa03d6" bind:__l="__l"></u-icon></view></block><block qq:if="{{mode==='link'}}"><u-link vue-id="47ad587a-2" text="{{value}}" href="{{href}}" underLine="{{true}}" class="data-v-62fa03d6" bind:__l="__l"></u-link></block><block qq:else><block qq:if="{{openType&&isMp}}"><button class="u-reset-button u-text__value data-v-62fa03d6" style="{{$root.s1}}" data-index="{{index}}" openType="{{openType}}" lang="{{lang}}" session-from="{{sessionFrom}}" send-message-title="{{sendMessageTitle}}" send-message-path="{{sendMessagePath}}" send-message-img="{{sendMessageImg}}" show-message-card="{{showMessageCard}}" app-parameter="{{appParameter}}" data-event-opts="{{[['getuserinfo',[['onGetUserInfo',['$event']]]],['contact',[['onContact',['$event']]]],['getphonenumber',[['onGetPhoneNumber',['$event']]]],['error',[['onError',['$event']]]],['launchapp',[['onLaunchApp',['$event']]]],['opensetting',[['onOpenSetting',['$event']]]]]}}" bindgetuserinfo="__e" bindcontact="__e" bindgetphonenumber="__e" binderror="__e" bindlaunchapp="__e" bindopensetting="__e">{{''+value+''}}</button></block><block qq:else><text class="{{['u-text__value','data-v-62fa03d6',type&&'u-text__value--'+type,lines&&'u-line-'+lines]}}" style="{{$root.s2}}">{{value}}</text></block></block><block qq:if="{{suffixIcon}}"><view class="u-text__suffix-icon data-v-62fa03d6"><u-icon vue-id="47ad587a-3" name="{{suffixIcon}}" customStyle="{{$root.g1}}" class="data-v-62fa03d6" bind:__l="__l"></u-icon></view></block></view></block>