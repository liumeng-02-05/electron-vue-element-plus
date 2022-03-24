const OSS = window.require('ali-oss');
const {
  REGION, ENDPOINT, ACCESS_KEY_ID, ACCESS_KEY_SECRET,
} = require('./const');
// eslint-disable-next-line
export function infoClient(bucket) {
  // 配置阿里云的参数
  const client = new OSS({
    region: REGION, // 地域
    endpoint: ENDPOINT, // 访问域名
    accessKeyId: ACCESS_KEY_ID, // 标识用户ID
    accessKeySecret: ACCESS_KEY_SECRET, // 用户验证签名密钥
    bucket, // 存储空间
    secure: true,
  });
  return client;
}

export const BuckList = new OSS({
  accessKeyId: ACCESS_KEY_ID,
  accessKeySecret: ACCESS_KEY_SECRET,
  cname: true,
  endpoint: ENDPOINT,
});
