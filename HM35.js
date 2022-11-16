console.log('Started Promises');

//Tasks 

//Re-resolve a promise?

/*let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert); 1, as other calls are ignored.*/



  //Delay with a promise

  /*function delay(ms){
        return new Promise(resolve => {
        setTimeout(resolve, ms);
    });

  }
  delay(3000).then(() => alert('runs after 3 seconds'));*/


  //Call async from non-async


  async function wait() {
    await new Promise(resolve => setTimeout(resolve, 2000));

    return 10;
  }

  function f() {
    wait().then(result => alert(result));
  }
  f();