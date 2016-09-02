<template>
	<div class="weui_tabbar">
        <a href="javascript:;" class="weui_tabbar_item weui_bar_item_on">
            <div class="weui_tabbar_icon">
                <img src="../assets/images/icon_nav_button.png" alt="">
            </div>
            <p class="weui_tabbar_label">首页</p>
        </a>
        <a href="javascript:;" class="weui_tabbar_item">
            <div class="weui_tabbar_icon">
                <img src="../assets/images/icon_nav_msg.png" alt="">
            </div>
            <p class="weui_tabbar_label">新闻</p>
        </a>
        <a href="javascript:;" class="weui_tabbar_item">
            <div class="weui_tabbar_icon">
                <img src="../assets/images/icon_nav_article.png" alt="">
            </div>
            <p class="weui_tabbar_label">发现</p>
        </a>
        <a href="javascript:;" class="weui_tabbar_item">
            <div class="weui_tabbar_icon">
                <img src="../assets/images/icon_nav_cell.png" alt="">
            </div>
            <p class="weui_tabbar_label">更多</p>
        </a>
    </div>
</template>
<script>
	export default {
		data () {
			return {
                flag: false,
                tabbarClass: {
                    'weui_tabbar_item': true,
                    'weui_bar_item_on': this.flag
                },
				msg: '123'
			}
		},
        methods () {
            return {
                changeTabbar: function(){
                    this.flag = !this.flag;
                }
            }
        }
	}
</script>
<style lang="less">
	.a{
        background: red;
        .b{
            background: blue;
        }
        .c{
            color: green;
        }
    }
</style>