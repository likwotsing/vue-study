<template>
  <div class="wrap">
    <h2>状态过渡</h2>
    <pre>
      对于元素本身的动效，如：
      1. 数字和运算
      2. 颜色的显示
      3. SVG节点的位置
      4. 元素的大小和其他的property
      这些数据要么本身以数组形式存储，要么可以转换为数值。有了这些数值，可以使用第三方库来实现元素的状态过渡效果。
    </pre>
    <h3>状态动画与侦听器</h3>
    <div>
      <input type="number" v-model.number="number" step="20">
      <p>{{ animatedNumber }}</p>
    </div>
    <pre>
      对于不能存储数值时，如css中的color值，可以通过使用tween.js和color-js来实现
      注意color-js的引入和使用，官方已不再维护。
    </pre>
    <div>
      <input v-model="colorQuery" @keyup.enter="updateColor" placeholder="请输入颜色">
      <button @click="updateColor">更新颜色</button>
      <p>Preview:</p>
      <span :style="{ backgroundColor: tweenedCSSColor }" class="color-span"></span>
      <p>{{ tweenedCSSColor }}</p>
    </div>
    <h3>把过渡放到组件里</h3>
    <pre>
      注意AnimatedInteger组件里的tweenjs的版本及不同的使用方法。
      Vue官网的版本：16.3.4，目前最新版本是18.6.0，使用方法不太一样。
    </pre>
    <div>
      <input v-model.number="firstNumber" type="number" step="20"> +
      <input v-model.number="secondNumber" type="number" step="20"> =
      {{ result }}
      <p>
        <animated-integer :value="firstNumber"></animated-integer> +
        <animated-integer :value="secondNumber"></animated-integer> =
        <animated-integer :value="result"></animated-integer>
      </p>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import TWEEN from '@tweenjs/tween.js'
import Color from 'color'
import AnimatedInteger from '@/components/AnimatedInteger.vue'

export default {
  components: {
    AnimatedInteger
  },
  data() {
    return {
      number: 0,
      tweenedNumber: 0,
      colorQuery: '',
      color: {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 1
      },
      tweenedColor: {},
      firstNumber: 20,
      secondNumber: 40
    }
  },
  created() {
    this.tweenedColor = Object.assign({}, this.color)
  },
  computed: {
    animatedNumber() {
      return this.tweenedNumber.toFixed(0)
    },
    tweenedCSSColor() {
      // return new Color({
      //   red: this.tweenedColor.red,
      //   green: this.tweenedColor.green,
      //   blue: this.tweenedColor.blue,
      //   alpha: this.tweenedColor.alpha
      // }).toCSS()
      return new Color([this.tweenedColor.red, this.tweenedColor.green, this.tweenedColor.blue, this.tweenedColor.alpha]).hex()
    },
    result() {
      return this.firstNumber + this.secondNumber
    }
  },
  watch: {
    number(newValue) {
      gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue })
    },
    color() {
      function animate() {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }
      new TWEEN.Tween(this.tweenedColor)
        .to(this.color)
        .start()
      animate()
    }
  },
  methods: {
    updateColor() {
      // this.color = new Color(this.colorQuery).toRGB()
      this.color = {
        red: new Color(this.colorQuery).red(),
        green: new Color(this.colorQuery).green(),
        blue: new Color(this.colorQuery).blue(),
        alpha: new Color(this.colorQuery).alpha()
      }
      this.colorQuery = ''
    }
  }
}
</script>

<style scoped>
.wrap {
  padding-bottom: 200px;
}
.color-span {
  display: inline-block;
  width: 50px;
  height: 50px;
}
</style>
