<block qq:if="{{show}}"><view class="{{['u-loading-icon','data-v-8ae91632',vertical&&'u-loading-icon--vertical']}}" style="{{$root.s0}}"><block qq:if="{{!webviewHide}}"><view data-ref="ani" class="{{['u-loading-icon__spinner','data-v-8ae91632','vue-ref','u-loading-icon__spinner--'+mode]}}" style="{{'color:'+(color)+';'+('width:'+($root.g0)+';')+('height:'+($root.g1)+';')+('border-top-color:'+(color)+';')+('border-bottom-color:'+(otherBorderColor)+';')+('border-left-color:'+(otherBorderColor)+';')+('border-right-color:'+(otherBorderColor)+';')+('animation-duration:'+(duration+'ms')+';')+('animation-timing-function:'+(mode==='semicircle'||mode==='circle'?timingFunction:'')+';')}}"><block qq:if="{{mode==='spinner'}}"><block class="data-v-8ae91632"><block qq:for="{{array12}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="u-loading-icon__dot data-v-8ae91632"></view></block></block></block></view></block><block qq:if="{{text}}"><text class="u-loading-icon__text data-v-8ae91632" style="{{'font-size:'+($root.g2)+';'+('color:'+(textColor)+';')}}">{{text}}</text></block></view></block>