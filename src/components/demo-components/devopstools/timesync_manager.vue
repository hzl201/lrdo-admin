<style lang='less'>
</style>
<template>
  <div class="">
    <Collapse v-model="value">
      <CollapseItem title=" 1.时间同步服务器">
        时间同步就是通过对本地时钟的某些操作，达到为分布式系统提供一个统一时间标度的过程。在分布式系统中，由于物理上的分散性，系统无法为彼此间相互独立的模块提供一个统一的全局时钟，而由各个进程或模块各自维护它们的本地时钟。由于这些本地时钟的计时速率、运行环境存在不一致性，因此即使所有本地时钟在某一时刻都被校准，一段时间后，这些本地时钟也会出现不一致。为了这些本地时钟再次达到相同的时间值，必须进行时间同步操作。通过一台内网NTP服务器发布时间同步服务，其他服务器连接该服务器进行时间同步操作。
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
