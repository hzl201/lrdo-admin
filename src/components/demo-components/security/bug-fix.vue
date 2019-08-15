<style lang='less'>
</style>
<template>
  <div class="">
    <Collapse v-model="value">
      <CollapseItem title=" 1.高危漏洞修复">
        操作系统安装好，把所有软件都安装好。优先打高危漏洞。打完重启。
      </CollapseItem>
      <p>360高危漏洞免疫工具下载地址：<a href="http://www.360.cn/webzhuanti/mianyigongju.html" target="_360gwldtools">外网下载</a></p>
      <p>cpu硬件漏洞检查工具下载地址：<a href="../Resources/cpuleak_scan.zip" target="_cputools">点击下载</a></p>
      <CollapseItem title=" 2.打常规补丁">
        使用360安全卫士等工具把所有补丁慢慢打上。打完重启。
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
