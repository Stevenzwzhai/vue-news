<template>
    <div id="app">
        <div class="weui_tab">
            <div class="weui_tab_bd">
                
                <news-content></news-content>
            </div>
            <news-footer></news-footer>
        </div>
    </div>
</template>
    
<script>
import Hello from './components/Hello'
import NewsFooter from './components/NewsFooter'
import NewsContent from './components/NewsContent'

export default {
  components: {
    Hello,
    NewsFooter,
    NewsContent
  },
  methods:{

  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
}

#app {
  height: 100%;
}



</style>
