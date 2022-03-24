import { ElButton, ElInput } from 'element-plus';

const ElementUIs = [ElButton, ElInput];
export default {
  install(Vue) {
    ElementUIs.forEach((ElementPlusUi) => {
      Vue.component(ElementPlusUi.name, ElementPlusUi);
    });
  },
};
