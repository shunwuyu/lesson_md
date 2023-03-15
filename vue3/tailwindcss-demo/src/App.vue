<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
<div class="flex items-center bg-white rounded-xl shadow-md p-6 space-x-4 max-w-sm mx-auto">
    <!-- flex布局时禁止收缩 -->
    <div class="flex-shrink-0">
        <!-- 设置图像的宽度、高度 -->
        <img class="w-12 h-12" src="./assets/logo.png" alt="" />
    </div>
    <!-- flex布局时禁止收缩 -->
    <div class="flex-shrink-0">
        <!-- 设置字体大小、权重、颜色 -->
        <div class="text-xl font-medium text-black">ChitChat</div>
        <!-- 设置字体颜色 -->
        <p class="text-gray-500">You have a new messaeg!</p>
    </div>
</div>
<div class="max-w-md mx-auto bg-yellow-50 rounded-xl shadow-md md:max-w-2xl">
  <!-- 移动端优先默认设置 -->
  <!-- MD断点处改变：flex布局 -->
  <div class="md:flex">
    <!-- 移动端优先默认设置 -->
    <!-- MD断点处改变：禁止布局收缩 -->
    <div class="md:flex-shrink-0">
      <!-- 移动端优先设置：固定高度、100%宽度、原比例裁剪、顶部圆角 -->
      <!-- MD断点处改变：100%高度、固定宽度、取消顶部圆角、设置左边圆角 -->
      <img
           class="h-48 w-full object-cover md:h-full md:w-48 rounded-t-xl md:rounded-t-none md:rounded-l-xl"
           src="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80"
           alt="Man looking at item at a store"
           />
    </div>
    <!-- 设置：容器内边距 -->
    <div class="p-8">
      <!-- 设置：字体大小、间距、权重、颜色 -->
      <div class="text-sm tracking-wide font-semibold text-indigo-500">Case Study</div>
      <!-- 设置：块元素、顶部外边距、字体大小、权重、颜色 -->
      <a class="block mt-1 text-lg font-medium text-black" href="#">
        Finding customers for your new business
      </a>
      <!-- 设置：顶部外边距、字体颜色 -->
      <p class="mt-2 text-slate-500">
        Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to
        find your first customers.
      </p>
    </div>
  </div>
</div>

<div class="text-slate-900">
        <div class="card flex bg-white rounded-lg w-fit p-10 mx-auto drop-shadow-2xl">
            <div class="mx-4">
                <img src="https://img11.360buyimg.com/seckillcms/s250x250_jfs/t1/107831/6/21483/55375/61f657c9Ebcb7b07f/54f1334d9e4a78bd.jpg" alt="" class="h-52 aspect-square object-center">
            </div>

            <div>
                <div class="text-white bg-black rounded-full w-fit px-3"><h2>free shipping</h2></div>
                <div class="item-name text-2xl font-semibold py-5 w-96">
                    <h2>Razer Kraken Kitty Edt Gaming Headset Quartz</h2>
                </div>
                <div class="item-price">
                    <div class="item-price-discount line-through"><p>1 599,-</p></div>
                    <div class="item-new-price text-4xl font-extrabold py-3"><p>799,-</p></div>
                    <p class="text-slate-400">This offer is valid until April 3 or as long as stock lasts!</p>
                </div>

                <div class="add-to-cart text-white text-center font-semibold bg-blue-500 py-3 my-6 rounded-xl shadow-sm shadow-blue-600 border-b-2 border-blue-700 cursor-pointer hover:bg-blue-600 transition-all ease-linear duration-300">
                    <h2>Add to cart</h2>
                </div>
                <div class="flex items-center gap-1 pb-4">
                    <div class="text-green-500"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Z"/></svg></div>
                    <h2 class="text-sm font-semibold">50+ pcs. in stock</h2>
                </div>
            </div>
        </div>

    </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
