var posts=["2025/04/20/设计模式-抽象工厂/","2025/04/20/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };