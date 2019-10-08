const state = {
  home_content: {
      'index_categories': [{'name':'',
                            'recommend_courses':[],
                            'tags': []}],
      'index_banner': [{'picture_url': '',
                        'background_color': '',
                        'html_url': ''}],
      'index_louplus': [{'html_url': '',
                         'open_time': '',
                         'picture_url': '',
                         'title': ''}],
      'classfication_courses': [{},{},{},{},{}],
      'bootcamps': [],
      'paths': []
  }
}

const mutations = {}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}