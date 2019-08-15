<style lang='less'>
</style>
<template>
  <div class="">
    <Collapse v-model="value">
      <CollapseItem title=" 1.临矿项目">
        开发中
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
