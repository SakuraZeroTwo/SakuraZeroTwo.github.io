var posts=["2025/04/20/测试文章/","2025/04/21/设计模式-工厂方法/","2025/04/22/设计模式-桥/","2025/04/21/设计模式-原型方法/","2025/04/22/设计模式-建造者/","2025/04/20/设计模式-抽象工厂/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };