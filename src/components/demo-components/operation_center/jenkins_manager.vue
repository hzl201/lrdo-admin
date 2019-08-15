<style lang='less'>
</style>
<template>
  <div class="">
    <Collapse v-model="value">
      <CollapseItem title=" 1.自动更新web原理">
        Web源码发布费时费力，手动更新需要先下载源码，进行编译，发布到本地，再将所有文件复制到正在运行的服务器。自动更新就是把代码提交后的步骤使用工具进行自动编译、打包，并部署到服务器上。更新是非常智能的：更新时本地若创建了新文件夹，不会删除；本地若修改过了同名文件，则会和svn源代码提交的最新文件做对比，保留修改时间最新的文件。
      </CollapseItem>
      <CollapseItem title=" 2.打包服务器的默认更新时间">
        临矿项目和陕煤项目都默认每天凌晨2点-3点之间自动获取最新源代码并打包成全量包（full）和半增量包（semi），矿端和集团端服务器都设置了任务计划，每天3点获取半增量包，自动进行更新。
      </CollapseItem>
      <CollapseItem title=" 3.手动更新方法">
        先由临矿和陕煤各自的打包服务器管理员手动执行Jenkins软件的打包命令，生成最新的半增量包。再由各矿业公司或矿端自行运行服务器桌面上的一键更新web的脚本。由于近期陕煤更新比较频繁，正在测试陕煤的代码提交后5-10分钟内自动打包，再由开发或运维人员远程到各矿业集团服务器手动执行桌面上的一键更新脚本的方案，同时保留半夜自动全部自动更新的设定。
      </CollapseItem>
      <CollapseItem title=" 4.更新包下载">
        目前半增量更新包打包规则是将近一个月的修改后的最新文件打包（上月27日-本月今日之间）下载增量包以后可以查询哪些更新已经被集成到更新包里了，根据svn版本和提交人员的最新修改内容来判断最新的修改是否已经在打包文件里。若存在，说明提交后24小时内将自动更新到所有服务器上。
      </CollapseItem>
      <p>临矿最新svn版本外网查询：<a href="http://lkv.hzl201.tk:8060/revision.txt" target="_svnwaiwang">外网地址</a></p>
      <p>临矿最新svn版本内网查询：<a href="http://10.155.128.234/revision.txt" target="_svnneiwang"> 内网地址</a></p>
      <p>临矿增量包内网下载地址：<a href="http://10.155.128.234/Resources/upload-semi.zip" target="_semineiwang">内网地址</a></p>
      <p>Jenkins打包工具管理页面外网：<a href="http://www.hzl201.tk:8060" target="_jenkinswebwaiwang"> 外网地址</a></p>
      <p>Jenkins打包工具管理页面内网：<a href="http://10.155.128.234:8080" target="_jenkinswebneiwang"> 内网地址</a></p>
      <p>Jenkins查询更新记录外网：<a href="http://www.hzl201.tk:8060/job/lkweb/changes" target="_jenkinswaiwanggxjl"> 外网地址</a></p>
      <p>Jenkins查询更新记录内网：<a href="http://10.155.128.234:8080/job/lkweb/changes" target="_jenkinsneiwanggxjl"> 内网地址</a></p>
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
