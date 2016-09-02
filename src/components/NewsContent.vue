<template>
	<div id="wrapper">
        <div id="scroller">
            <div id="pullDown">
                <span class="pullDownIcon">&nbsp;</span><span class="pullDownLabel">下拉刷新</span>
            </div>
            <ul id="thelist">
                <li>Pretty row 1</li>
                <li>Pretty row 2</li>
                <li>Pretty row 3</li>
                <li>Pretty row 4</li>
                <li>Pretty row 5</li>
                <li>Pretty row 6</li>
                <li>Pretty row 7</li>
                <li>Pretty row 8</li>
                <li>Pretty row 9</li>
                <li>Pretty row 10</li>
                <li>Pretty row 11</li>
                <li>Pretty row 12</li>
                <li>Pretty row 13</li>
                <li>Pretty row 14</li>
                <li>Pretty row 15</li>
                <li>Pretty row 16</li>
                <li>Pretty row 17</li>
                <li>Pretty row 18</li>
                <li>Pretty row 19</li>
                <li>Pretty row 20</li>
                <li>Pretty row 21</li>
                <li>Pretty row 22</li>
                <li>Pretty row 23</li>
                <li>Pretty row 24</li>
                <li>Pretty row 25</li>
                <li>Pretty row 26</li>
                <li>Pretty row 27</li>
                <li>Pretty row 28</li>
                <li>Pretty row 29</li>
                <li>Pretty row 30</li>
                <li>Pretty row 31</li>
                <li>Pretty row 32</li>
                <li>Pretty row 33</li>
                <li>Pretty row 34</li>
                <li>Pretty row 35</li>
                <li>Pretty row 36</li>
                <li>Pretty row 37</li>
                <li>Pretty row 38</li>
                <li>Pretty row 39</li>
                <li>Pretty row 40</li>
            </ul>
            <div id="pullUp">
                <span class="pullUpIcon"></span><span class="pullUpLabel">加载更多</span>
            </div>
        </div>
    </div>
</template>
<script>
	export default {
		data () {
			return {
				msg:'news content'
			}
		}
	}
</script>

<style>
    #wrapper {
    position:absolute; z-index:1;
    top:0; bottom:48px; left:-9999px;
    width:100%;
    background:#aaa;
    overflow:auto;
}

#scroller {
    position:absolute; z-index:1;
/*  -webkit-touch-callout:none;*/
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    width:100%;
    padding:0;
}

#scroller ul {
    list-style:none;
    padding:0;
    margin:0;
    width:100%;
    text-align:left;
}

#scroller li {
    padding:0 10px;
    height:40px;
    line-height:40px;
    border-bottom:1px solid #ccc;
    border-top:1px solid #fff;
    background-color:#fafafa;
    font-size:14px;
}

#myFrame {
    position:absolute;
    top:0; left:0;
}



/**
 *
 * Pull down styles
 *
 */
#pullDown, #pullUp {
    background:#fff;
    height:40px;
    line-height:40px;
    padding:5px 10px;
    border-bottom:1px solid #ccc;
    font-weight:bold;
    font-size:14px;
    color:#888;
    text-align: center;
}
#pullDown .pullDownIcon, #pullUp .pullUpIcon  {
    display:inline-block; /*float:left;*/
    width:40px; height:40px;
    background:url(../assets/images/pull-icon@2x.png) 0 0 no-repeat;
    -webkit-background-size:40px 80px; background-size:40px 80px;
    -webkit-transition-property:-webkit-transform;
    -webkit-transition-duration:250ms;  
}
#pullDown .pullDownLabel,#pullUp .pullUpLabel {
    display: inline-block;
}
#pullDown .pullDownIcon {
    -webkit-transform:rotate(0deg) translateZ(0);
}
#pullUp .pullUpIcon  {
    -webkit-transform:rotate(-180deg) translateZ(0);
}

#pullDown.flip .pullDownIcon {
    -webkit-transform:rotate(-180deg) translateZ(0);
}

#pullUp.flip .pullUpIcon {
    -webkit-transform:rotate(0deg) translateZ(0);
}

#pullDown.loading .pullDownIcon, #pullUp.loading .pullUpIcon {
    background-position:0 100%;
    -webkit-transform:rotate(0deg) translateZ(0);
    -webkit-transition-duration:0ms;

    -webkit-animation-name:loading;
    -webkit-animation-duration:2s;
    -webkit-animation-iteration-count:infinite;
    -webkit-animation-timing-function:linear;
}

@-webkit-keyframes loading {
    from { -webkit-transform:rotate(0deg) translateZ(0); }
    to { -webkit-transform:rotate(360deg) translateZ(0); }
}
</style>