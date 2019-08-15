<style lang='less'>
</style>
<template>
  <div class="">
    <Collapse v-model="value">
      <CollapseItem title=" 1.服务器搭建方法">
      <p>服务器操作系统安装方法：<a href="../Resources/system/Windows_Server_2008_R2系统安装与设置.docx" target="_fwqczxtazff"> 下载地址</a></p>
      </CollapseItem>
      <CollapseItem title=" 2.服务器IP分配表">
      <p>临矿服务器IP分配表：<a href="../Resources/projiect/网络调试/临矿集团各煤矿内网ip表.xlsx" target="_lkserverip"> 下载地址</a></p>
      <p>临矿服务器IP分配表：<a href="../Resources/projiect/网络调试/陕煤服务器明细表.xlsx" target="_smserverip"> 下载地址</a></p>
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
