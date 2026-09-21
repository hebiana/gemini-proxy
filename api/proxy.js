export const config = {
  runtime: 'edge',
  regions: ['iad1'], // 核心：强制分配到 iad1 (美国华盛顿特区节点)
};

export default async function handler(req) {
  const url = new URL(req.url);
  url.hostname = "generativelanguage.googleapis.com";
  url.port = "";
  
  const newRequest = new Request(url, req);
  // 覆盖原本的 Host 头部，伪装成直接访问 Google
  newRequest.headers.set("Host", "generativelanguage.googleapis.com");
  
  return fetch(newRequest);
}
