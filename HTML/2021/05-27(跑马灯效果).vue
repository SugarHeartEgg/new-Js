<template lang="pug">
div
  div
    .box.animation-border-conic
      .box-warp
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
div {
  position: relative;

  .box {
    width: 1000px;
    height: 600px;
    margin: 100px auto;
    background: hotpink;
  }

  .box-warp {
    width: 996px;
    height: 596px;
    position: absolute;
    top: 2px;
    left: 2px;
    background: pink;
  }
}

// 第一种方案
.animation-border-conic {
  position: relative;
  z-index: 0;
  padding: 2px !important;
  overflow: hidden;

  &:hover {
    &::before {
      content: '';
      position: absolute;
      z-index: -2;
      top: -50%;
      right: -50%;
      bottom: -50%;
      left: -50%;
      background: conic-gradient(transparent, #a8efff 15%, transparent 30%, transparent 50%, #a8efff 65%, transparent 80%);
      animation: rotate 4s linear infinite;
    }

    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      top: 2px;
      right: 2px;
      bottom: 2px;
      left: 2px;
      background: #fff;
    }
  }
}

// 第二种方案
.animation-border-round {
  position: relative;
  padding: 2px !important;

  &:hover {
    &::before, &::after {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      border: 2px solid #a8efff;
      transition: all 0.5s;
      animation: clippath 3s infinite linear;
      border-radius: 4px;
    }

    &::after {
      animation: clippath 3s infinite -1.5s linear;
    }
  }
}

@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}

@keyframes clippath {
  0%, 100% {
    clip-path: inset(98% 0 0 0);
  }

  25% {
    clip-path: inset(0 98% 0 0);
  }

  50% {
    clip-path: inset(0 0 98% 0);
  }

  75% {
    clip-path: inset(0 0 0 98%);
  }
}
</style>