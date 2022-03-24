import {
  ElButton, ElInput, ElTabs, ElTabPane, ElTooltip, ElIcon, ElMenu, ElMenuItem, ElSubMenu,
  ElBreadcrumb, ElBreadcrumbItem, ElTable, ElTableColumn,
} from 'element-plus';

const ElementUIs = [
  ElButton, ElInput, ElTabs, ElTabPane, ElTooltip, ElIcon, ElMenu, ElMenuItem, ElSubMenu,
  ElBreadcrumb, ElBreadcrumbItem, ElTable, ElTableColumn,
];
export default {
  install(Vue) {
    ElementUIs.forEach((ElementPlusUi) => {
      Vue.component(ElementPlusUi.name, ElementPlusUi);
    });
  },
};
