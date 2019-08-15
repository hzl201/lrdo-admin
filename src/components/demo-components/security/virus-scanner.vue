<style lang='less'>
</style>
<template>
  <div class="">
    <Collapse v-model="value">
      <CollapseItem title=" 1.安装杀毒软件">
        操作系统安装好，把所有软件都安装好。安装杀毒软件，并更新病毒库，把自家程序添加到白名单，若查杀出病毒后需要重启再次杀毒。
      </CollapseItem>
      <CollapseItem title=" 2.升级病毒库">
        使用360杀毒软件定期升级病毒库，保证杀毒效率。
      </CollapseItem>
      <CollapseItem title=" 3.勒索病毒防治">
        勒索病毒只能防御，中招之后无法修复，唯一有效的操作就是平时多进行数据异地备份。
        <p>勒索病毒快速防护方式：<a href="../Resources/勒索病毒快速防护方式.docx" target="_lkjtlsbjfz">点击下载</a></p>
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
