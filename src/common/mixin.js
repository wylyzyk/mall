import { debounce } from "common/debounce";
import BackTop from 'components/common/backTop/BackTop';

export const itemImgLoad = {
  data () {
    return {
      itemImgListener: null
    }
  },
  mounted () {
    const refresh = debounce(this.$refs.scroll.scrollRefresh, 100);

    this.itemImgListener = () => {
      refresh();
    }

    this.$bus.$on("itemImageLoaded", this.itemImgListener);
    console.log("mixin");
  }
}


export const backTopMixin = {
  components: {
    BackTop
  },
  data () {
    return {
      isShowBackTop: false,
      isFixed: false
    }
  },
  methods: {
    backTopClick () {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    showBackTop (position) {
      this.isShowBackTop = Math.abs(position.y) > 1000;
    }
  }
}