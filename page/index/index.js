Component({
  mixins: [],
  data: {},
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    aaa() {
      dd.utils.$http('/login','post').then(
        (data) => {
          console.log(data)
        },
        (err) => {
          console.log('错误:'+err)
        });
    }
  }
});
