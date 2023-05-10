<template>
    <form @submit.prevent>
      <div v-if="imagePreviewUrl">
        <img style="max-width: 380px" :src="imagePreviewUrl" alt="图像预览" />
      </div>
      <div>
        <button
          class="bordered"
          @click="($refs.fileInput as HTMLInputElement).click()"
        >
          选择图像文件
        </button>
        <input
          type="file"
          hidden
          accept="image/png, image/jpeg, image/jpg"
          ref="fileInput"
          @change="onChangeFile"
        />
      </div>
      <div>
        <input type="text" placeholder="标题" v-model="title" />
      </div>
      <div>
        <textarea placeholder="正文" v-model="content"></textarea>
      </div>
      <div>
        <button class="primary" @click="createPost">发布</button>
      </div>
    </form>
  </template>
  
  <script setup lang="ts">

  useHead({ title: '创建内容' });
  const router = useRouter();
  const title = ref('');
  const content = ref('');
  const file = ref<File>();
  const onChangeFile = (event: Event) => {
    const { files } = event.target as HTMLInputElement;
    if (files) {
      file.value = files[0];
    }
    if (file.value) {
      createImagePreview(file.value);
    }
  };
  const imagePreviewUrl = ref<string>();
  const createImagePreview = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      imagePreviewUrl.value = event.target!.result as string;
    };
  };
  const createPost = async () => {
    const { data } = await useApiFetch('posts', {
      method: 'POST',
      body: {
        title: title.value,
        content: content.value,
      },
    });
    await createFile((data.value as any).insertId);
    if (data.value) {
      title.value = '';
      content.value = '';
    }
    router.push('/posts');
  };
  const createFile = async (postId: number) => {
    const formData = new FormData();
    formData.append('file', file.value!);
    const { data } = await useApiFetch(`files?post=${postId}`, {
      method: 'POST',
      body: formData,
    });
    if (data.value) {
      imagePreviewUrl.value = '';
    }
  };
  </script>