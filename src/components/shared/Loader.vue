<template>
  <div class="flex items-center content-center justify-center">
    <div class="dot-loader"></div>
    <div class="dot-loader dot-loader--2"></div>
    <div class="dot-loader dot-loader--3"></div>
  </div>
</template>

<style scoped lang="scss">
.dot-loader {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #f59e0b;
  position: relative;
  -webkit-animation: 1.2s grow ease-in-out infinite;
  animation: 1.2s grow ease-in-out infinite;
}

.dot-loader--2 {
  -webkit-animation: 1.2s grow ease-in-out infinite 0.15555s;
  animation: 1.2s grow ease-in-out infinite 0.15555s;
  margin: 0 20px;
}
.dot-loader--3 {
  -webkit-animation: 1.2s grow ease-in-out infinite 0.3s;
  animation: 1.2s grow ease-in-out infinite 0.3s;
}
@-webkit-keyframes grow {
  0%,
  40%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes grow {
  0%,
  40%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
