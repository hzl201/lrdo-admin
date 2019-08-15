<style lang='less'>
</style>
<template>
  <div class="">
    <Collapse v-model="value">
      <CollapseItem title="1.数据库现状">
        数据库分布情况。分为测试数据库和生产环境数据库。
      </CollapseItem>
      <CollapseItem title="2.数据备份">
        建立一套行之有效的备份计划。目前临矿集团的鲁西82、古城188、里彦234、郭屯11服务器都已经设置为备份服务器，需查一下带backup名称的文件夹。每台数据库服务器上都有对应的备份配置页面。如http://127.0.0.1:8384
       <p>数据库备份计划：<a href="../Resources/临矿项目服务器备份计划.docx" target="_dbbackupjh"> 下载地址</a></p>
      </CollapseItem>
    </Collapse>
  </div>
</template>
<script>
export default {
  components: {

  },
  data() {
    return {
      value: [0]
    };
  },
  computed: {

  },
  created() {

  },
  methods: {

  }
};
</script>
