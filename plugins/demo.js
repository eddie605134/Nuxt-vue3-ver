export default ({ app }, inject) => {
    inject("demoTest", {
    log (val) {
      console.log(val);
    }
  });
  };
  