<style lang='less'>
</style>
<template>
  <div class="">
    <Collapse v-model="value">
      <CollapseItem title=" 1.临矿项目">
      <p>临矿代码评审管理平台地址外网：<a href="http://sonar.hzl201.tk:8060/" target="_lkdmpsww">外网地址</a></p>
      <p>临矿代码评审管理平台地址内网：<a href="http://10.155.128.234:9000" target="_lkdmpsnw">内网地址</a></p>
      </CollapseItem>
      <CollapseItem title=" 2.陕煤项目">
        开发中
      </CollapseItem>
      <CollapseItem title=" 3.曲靖项目">
        开发中
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
