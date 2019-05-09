Page({
  data: {
    motto: 'Hello World',
    userInfo: {
			avatarUrl: 'https://sfault-image.b0.upaiyun.com/117/579/1175792133-5b63fce811636_articlex',
      nickName: 'jayzou'
    },
    lists: [
			'aslkdnoakjbsnfkajbfk',
			'qwrwfhbfdvndgndghndeghsdfh',
			'qweqwtefhfhgmjfgjdfghaefdhsdfgdfh',
		],
    showSkeleton: true 
  },
  onLoad: function() {
    
    setTimeout(() => {
			this.setData({
				showSkeleton: false
			})
		}, 2000)
  }
})