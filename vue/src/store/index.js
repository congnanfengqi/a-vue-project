import { createStore } from "vuex";
const store = createStore({
  state:()=>({
    cartList: [],
    selectItem:[]
  }),
  mutations: {
    // 添加这个 mutation
    addCart(state, payload) {
      const oldProduct = state.cartList.find(item => item.iid === payload.iid);    
      if (oldProduct) {
        
        oldProduct.count += 1 // 如果存在，数量+1
      } else {
        payload.count = 1 // 新商品，设置数量为1
        state.cartList.push(payload)    
        }
    },

  },
  
})
export default store