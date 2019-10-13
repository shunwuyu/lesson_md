import HomeApi from '@/api/home/home.js'
const state = {
  home_content: {
    'classfication_courses': [{},{},{},{},{}],
  }
}

const mutations = {
  change_home_content (state, datas) {
    // {homeIndex: 'index_categories',
    //  data: data}
    let homeIndex = datas.home_index
    let homeContent = datas.data
    state.home_content[homeIndex] = homeContent
  }
  // get_and_change_home_content
}

const actions = {
  get_and_change_home_content (context) {
    HomeApi.get_classfication_courses().then((classficationCourses) => {
      let newData = []
      let tempList = []
      console.log(classficationCourses);
      for (let [index, course] of classficationCourses.data[1].courses.entries()) {
        tempList.push(course)
        if ( (index+1) % 4 === 0 ) {
          newData.push(tempList)
          tempList = []
        }
      }
      classficationCourses.data[1].courses = newData
      context.commit('change_home_content', {'home_index': 'classfication_courses', 'data': classficationCourses.data})
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}