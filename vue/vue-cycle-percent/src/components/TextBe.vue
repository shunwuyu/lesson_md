<template>
  <svg width="100%" height="100">
    <text
     text-anchor="middle"
      x="50%" y="50%" class="text text-1">
      apple
    </text>
    <text
     text-anchor="middle"
      x="50%" y="50%" class="text text-2">
      apple
    </text>
    <text
     text-anchor="middle"
      x="50%" y="50%" class="text text-3">
      apple
    </text>
</svg>
</template>
<script>
export default {
  
}
</script>

<style scoped>
.text{
    font-size: 64px;
    font-weight: bold;
    text-transform: uppercase;
    fill: none;
    stroke-width: 2px;
    stroke-dasharray: 20 10;
    animation: stroke 6s infinite linear;
}
/* .text{
    font-size: 64px;
    font-weight: bold;
    text-transform: uppercase;
    fill: none;
    stroke-width: 2px;
    stroke-dasharray: ;
    animation: stroke 6s infinite linear;
} */
@keyframes stroke {
  100% {
    stroke-dashoffset: 400;
  }
}
.text-1{
    stroke: #3498db;
    text-shadow: 0 0 5px #3498db;
    animation-delay: -1.5s;
}
<input type="text" abcdefg />
<input type="text" hijklmn />
input[type="text"] {}
input[abcdefg] {}
.text-2{
    stroke: #f39c12;
    text-shadow: 0 0 5px #f39c12;
    animation-delay: -3s;
}
.text-3{
    stroke: #e74c3c;
    text-shadow: 0 0 5px #e74c3c;
    animation-delay: -4.5s;
}
.text-4{
    stroke: #9b59b6;
    text-shadow: 0 0 5px #9b59b6;
    animation-delay: -6s;
}
</style>