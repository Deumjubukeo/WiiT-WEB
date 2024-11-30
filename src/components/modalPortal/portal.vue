<template>
  <teleport to="#modal">
    <slot></slot>
  </teleport>
</template>

<script>
export default {
  name: "PortalComponents",
};
</script>
