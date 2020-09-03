<template>
  <div class="wrap">
    <h2>进入/离开&列表过渡</h2>
    <h3>单元素/组件的过渡</h3>
    <button @click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    <pre>
      过渡的类名：v-enter, v-enter-active, v-enter-to, v-leave, v-leave-active, v-leavt-to
      如果transition元素没有设置name属性，则 v- 是这些类名的前缀。
    </pre>
    <h4>CSS过渡</h4>
    <h4>CSS动画</h4>
    <pre>
      CSS动画用法同CSS过渡，区别是在动画中 v-enter 类名在节点插入DOM后不会立刻删除，而是在 animationed 事件触发时删除。
      @keyframes里设置动画百分比时的状态
    </pre>
    <pre>
      自定义过渡类名：enter-class, enter-active-class, enter-to-class, leave-class, leave-active-class, leave-to-class
      自定义过渡类名的优先级高于普通的类名，可以结合第三方CSS动画库使用，如：Aminate.css

      使用Animate.css:
      1、注意版本：v4的类名和v3的不一样
      2、引入的2种方式：
        1、直接在需要的组件的script标签里：import 'animate.css'
        2、在main.js里，import AnimateCSS from 'animate.css'; Vue.use(AnimateCSS)
    </pre>
    <div>
      <button @click="show = !show">Toggle</button>
      <transition
        name="custom-classes-transition"
        enter-active-class="animate__animated animate__tada"
        leave-active-class="animate__animated animate__bounceOutRight"
      >
        <p v-if="show">hello</p>
      </transition>
    </div>
    <pre>
      JavaScript钩子:before-enter, enter, after-enter, enter-cancelled, before-leave, leave, after-leave, leave-cancelled
      可以结合第三方库使用，如Velocity.js
    </pre>
    <h4>初始渲染的过渡：可以使用CSS类名，也可以使用JavaScript钩子</h4>
    <div>
      <button @click="show = !show">Toggle</button>
      <transition
        appear
        appear-active-class="animate__animated animate__rubberBand"
        enter-active-class="animate__animated animate__tada"
        leave-active-class="animate__animated animate__bounceOutRight"
      >
        <p v-if="show">hello</p>
      </transition>
    </div>
    <h4>多个元素的过渡</h4>
    <p>
      多个元素的过渡：使用key区分多个元素，否则Vue为了效率只会替换相同标签内部的内容。
    </p>
    <pre>
      过渡模式：in-out, out-in
      设置多个transition效果时：可以使用 transition: all 1s; 也可以为每个效果设置时间：transition: opacity 1s, transform 2s;
    </pre>
    <div class="btns-wrap">
      <transition name="btn-fade">
        <button v-if="btnMode" @click="btnMode = !btnMode" key="off">off</button>
        <button v-if="!btnMode" @click="btnMode = !btnMode" key="on">on</button>
      </transition>
    </div>
    <p>使用过渡模式：</p>
    <div class="btns-wrap">
      <transition name="mode-1" mode="out-in">
        <button v-if="btnMode" @click="btnMode = !btnMode" key="off">off</button>
        <button v-if="!btnMode" @click="btnMode = !btnMode" key="on">on</button>
      </transition>
    </div>
    <p>过渡模式，和滑动淡出结合</p>
    <div class="btns-wrap">
      <transition name="mode-2" mode="in-out">
        <button v-if="btnMode" @click="btnMode = !btnMode" key="off">off</button>
        <button v-if="!btnMode" @click="btnMode = !btnMode" key="on">on</button>
      </transition>
    </div>
    <h4>多个组件的过渡</h4>
    <p>多个组件的过多：不需要使用key，只需要使用 动态组件。</p>
    <button @click="changeComponent">切换组件</button>
    <transition name="component-fade" mode="out-in">
      <component :is="view"></component>
    </transition>
    <h4>列表过渡</h4>
    <pre>
      v-for渲染的列表，使用 transition-group 组件实现列表过渡。
      1、不同于 transition, transition-group会以一个真实的元素呈现，默认为span元素，可通过tag属性指定为其他元素
      2、过渡模式 不可用，因为不再相互切换特有的元素
      3、内部元素 必须 提供唯一的key属性
      4、css过渡的类将会应用在内部元素中，而不是这个组/容器本身。
    </pre>
    <h5>列表的进入/离开过渡：</h5>
    <div>
      <button @click="add">add</button>
      <button @click="remove">remove</button>
      <transition-group name="list" tag="p">
        <span v-for="item of items" :key="item" class="list-item">
          {{ item }}
        </span>
      </transition-group>
    </div>
    <h5>列表的排序过渡：使用v-move的类名，或通过move-class配合第三方库使用</h5>
    <div>
      <button @click="shuffle">shuffle</button>
      <transition-group name="flip-list" tag="ul">
        <li v-for="item of items2" :key="item" class="flip-item">
          {{ item }}
        </li>
      </transition-group>
    </div>
    <pre>
      多维网格的过渡： 子元素的key必须设置，且不同
    </pre>
    <div class="table-wrap">
      <button @click="handleTable">过渡</button>
      <transition-group name="cell" tag="div" class="sudoku-container">
        <span v-for="cell of cells" :key="cell.id" class="cell">
          {{ cell.number }}
        </span>
      </transition-group>
    </div>
    <h5>列表的交错过渡</h5>
    <p>
      通过data属性与JavaScript通信，就可以实现列表的交错过渡
    </p>
    <div>
      <input v-model="query">
      <transition-group
        name="staggered-fade"
        tag="ul"
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <li
          v-for="(item, index) of computedList"
          :key="item.msg"
          :data-index="index"
        >
          {{ item.msg }}
        </li>
      </transition-group>
      <h4>可复用的过渡</h4>
      <p>
        可复用的过渡：将transition或transition-group作为根组件，然后将任何子组件放在其中就可以了。
        推荐使用函数式组件实现。
      </p>
      <h4>动态过渡</h4>
      <p>
        动态过渡：在Vue中过渡也是数据驱动的，可以通过在transition元素上v-bind的name属性来动态绑定值实现。也可以使用JavaScript钩子函数实现。
      </p>
    </div>
  </div>
</template>

<script>
import 'animate.css'
import ComponentA from '@/components/ComponentA.vue'
import ComponentB from '@/components/ComponentB.vue'
import _ from 'lodash'
import Velocity from 'velocity-animate'

export default {
  components: {
    ComponentA,
    ComponentB
  },
  data() {
    return {
      show: true,
      btnMode: true,
      view: 'ComponentA',
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      items2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      // cells: Array.apply(null, { length: 81 }).map((_, index) => {
      cells: Array.apply(null, Array(81)).map((_, index) => {
        return {
          id: index,
          number: (index % 9) + 1
        }
      }),
      query: '',
      list: [
        { msg: 'Bruce Lee' },
        { msg: 'Jackie Chan' },
        { msg: 'Chuck Norris' },
        { msg: 'Jet Li' },
        { msg: 'Kung Fury' }
      ]
    }
  },
  computed: {
    computedList() {
      const vm = this
      return this.list.filter(item => {
        return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
      })
    }
  },
  methods: {
    changeComponent() {
      this.view = this.view === 'ComponentA' ? 'ComponentB' : 'ComponentA'
    },
    randomIndex() {
      return Math.floor(Math.random() * this.items.length)
    },
    add() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove() {
      this.items.splice(this.randomIndex(), 1)
    },
    shuffle() {
      this.items2 = _.shuffle(this.items2)
    },
    handleTable() {
      this.cells = _.shuffle(this.cells)
    },
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter(el, done) {
      const delay = el.dataset.index * 150
      setTimeout(() => {
        Velocity(
          el,
          { opacity: 1, height: '1.6em' },
          { complete: done }
        )
      }, delay)
    },
    leave(el, done) {
      const delay = el.dataset.index * 150
      setTimeout(() => {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done }
        )
      }, delay)
    }
  }
}
</script>

<style scoped>
.wrap {
  padding-bottom: 200px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.btn-fade-enter-active, .btn-fade-leave-active {
  transition: opacity 1s, transform 1s;
  /* transition: all 1s; */
}
.btn-fade-enter, .btn-fade-leave-to {
  opacity: 0;
}
.btn-fade-enter {
  transform: translateX(30px);
}
.btn-fade-leave-to {
  transform: translateX(-30px);
}
.btns-wrap {
  position: relative;
  width: 200px;
  height: 50px;
  margin: 0 auto;
}
.btn-wrap {
  position: absolute;
  top: 0;
  left: 0;
}

.btns-wrap button {
  position: absolute;
  top: 0;
  left: 0;
}

.mode-1-enter-active, .mode-1-leave-active {
  transition: opacity .5s;
}
.mode-1-enter, .mode-1-leave-to {
  opacity: 0;
}

.mode-2-enter-active, .mode-2-leave-active {
  /* transition: opacity .5s; */
  transition: all .5s;
}
.mode-2-enter, .mode-2-leave-to {
  opacity: 0;
}
.mode-2-enter {
  transform: translateX(30px);
}
.mode-2-leave-to {
  transform: translateX(-30px);
}

/* 组件的过渡 */
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity 0.5s;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}

/* 列表的进入/离开过渡 */
.list-item {
  /* 为了配合 translateY */
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-move {
  /* add 时其他元素的过渡效果 */
  transition: all 1s;
}
.list-leave-active {
  /* remove 时其他元素的过渡效果 */
  position: absolute;
}

/* 列表的排序过渡 */
.flip-list-move {
  transition: transform 1s;
}

/* 多维网格 */
.sudoku-container {
  display: flex;
  flex-wrap: wrap;
  width: 238px;
  margin-top: 10px;
}
.cell {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaa;
  margin-right: -1px;
  margin-bottom: -1px;
}
.cell:nth-child(3n) {
  margin-right: 0;
}
.cell:nth-child(27n) {
  margin-bottom: 0;
}
.cell-move {
  transition: transform 1s;
}
</style>
