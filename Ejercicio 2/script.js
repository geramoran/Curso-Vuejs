new Vue({
  el: '#app',
  
  data () {
    return {
      courses: [],
      title: '',
      time: ''
    }
  },
  
  computed: {
    totalTime () {
      if (!this.courses.length) { return 0 }
      return this.courses.reduce((total, course) => total + parseInt(course.time), 0)
    }
  },
  
  methods: {
    addCourse () {
      if (!this.title || !this.time) { return }
      this.courses.push({
        title: this.title,
        time: this.time
      });
      this.title = '';
      this.time = 0;
    },
  }
})