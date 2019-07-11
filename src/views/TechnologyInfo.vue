<template>
  <div class="text-center pt-3 pb-3">
    <h4>
      {{ iteminfo.name }} <small class="d-block">Info about {{ iteminfo.name }}</small>
    </h4>

    <p v-if="(iteminfo.name == 'Other' || iteminfo.name == 'Consultancy') ? false : true ">
      <span>{{ iteminfo.description }} </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'TechnologyInfo',
  props: ['iteminfo']
}
</script>
