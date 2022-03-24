function setZero(data) {
  if (data >= 10) {
    return data;
  }
  return `0${data}`;
}

function timetrans(value) {
  const date = new Date(value); // 如果date为10位需要乘1000
  const Y = `${date.getFullYear()}.`;
  const M = `${setZero(date.getMonth() + 1)}.`;
  const D = `${setZero(date.getDate())} `;
  const h = `${setZero(date.getHours())}:`;
  const m = `${setZero(date.getMinutes())}`;
  return Y + M + D + h + m;
}

function formatList(data, fileName) {
  const newData = [];
  // eslint-disable-next-line
  data.map((item) => {
    const obj = {};
    if (item.name !== fileName) {
      obj.name = fileName ? item.name.replace(fileName, '') : item.name;
      obj.size = item.StorageClass ? item.StorageClass : item.size;
      obj.update = timetrans(item.lastModified ? item.lastModified : item.creationDate);
      newData.push(obj);
    }
  });
  return newData;
}
function formatCatalogue(data, fileName) {
  const newData = [];
  // eslint-disable-next-line
  data.map((item) => {
    const obj = {};
    if (fileName !== item) {
      const newItem = item.replace(fileName, '');
      obj.name = newItem.split('/').length > 2 ? newItem.split('/')[newItem.split('/').length - 1] : newItem;
      obj.size = 0;
      obj.update = 0;
      newData.push(obj);
    }
  });
  return newData;
}
const isFIle = (str) => {
  const reg = /\.(png|jpg|gif|jpeg|webp|html|icon)$/;
  return reg.test(str);
};
module.exports = {
  formatList,
  timetrans,
  formatCatalogue,
  isFIle,
};
