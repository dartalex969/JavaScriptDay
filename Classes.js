
  

  //HOMEWORK

  //the task one

  /*class PrintMachine {
       
    constructor(text,fontSize, color, fontFamily){
      this.text = text;
      this.fontSize = fontSize;
      this.fontFamily = fontFamily;
      this.color = color;
    }

    
    print(){
            
      document.write(`<p>${this.text}</p>`,`<style>p{
        font-size: ${this.fontSize};
        color:${this.color};
        font-family:${this.fontFamily};
      }</style>,`);
    }

  }

  let text = new PrintMachine("Hello, my friend! How is it going?",'50px','rgb(255, 99, 71)','Times New Roman');
  text.print();
  console.log(text);*/

  //the task two

  class News {

    constructor(header, date, text, tags ){
      this.header = header;
      this.date = new Date(2022,9,30,15,30);
      this.text = text;
      this.tags = tags;
      
    }

    print(){
      const yyyy = this.date.getFullYear();
      let mm = this.date.getMonth() + 1;
      let dd = this.date.getDate();
      if (dd <10) dd = "0" + dd;
      if (mm <10) mm = "0" + mm;
      let formattedDate = dd +'.'+ mm + '.' + yyyy;
      let today = 'today';

      let diff = Date.now() - +this.date; 
      
      
      const _24hours = 86400000;
      const _oneWeek = 7 * _24hours;
      let daysAgo = Math.floor(diff/_24hours);

      if(diff < _24hours) {
                
        this.date = today;
              
        document.write(`<h2>${this.header}</h2><p>${this.date}</p><p>${this.text}</p><p>${this.tags}</p>`,
      `<style>p,h2{width:560px;margin:30px auto;font-family:verdana}</style>`);
      }
      else if(diff > _24hours && diff < _oneWeek){

        this.date = daysAgo;
        //console.log(this.date);

        document.write(`<h2>${this.header}</h2><p>${this.date} days ago</p><p>${this.text}</p><p>${this.tags}</p>`,
      `<style>p,h2{width:560px;margin:30px auto;font-family:verdana}</style>`);

      }
      else{
        document.write(`<h2>${this.header}</h2><p>${formattedDate}</p><p>${this.text}</p><p>${this.tags}</p>`,
      `<style>p,h2{width:560px;margin:30px auto;font-family:verdana}</style>`);

      }
        

      
    }
  }

   let news = new News(`What is Lorem Ipsum?`,this.date,`Lorem Ipsum is simply dummy text of the printing and
   typesetting industry. Lorem Ipsum has been the industry's standard dummy
   text ever since the 1500s, when an unknown printer took a galley of type
   and scrambled it to make a type specimen book.`,`#lorem #ipsum #text` );
   let news1 = new News(`Why do people use Lorem Ipsum?`,this.date,`Lorem Ipsum is simply dummy text of the printing and
   typesetting industry. Lorem Ipsum has been the industry's standard dummy
   text ever since the 1500s, when an unknown printer took a galley of type
   and scrambled it to make a type specimen book.`,`#lorem #text` );
   let news2 = new News(`When was Lorem Ipsum mentioned first?`,this.date,`Lorem Ipsum is simply dummy text of the printing and
   typesetting industry. Lorem Ipsum has been the industry's standard dummy
   text ever since the 1500s, when an unknown printer took a galley of type
   and scrambled it to make a type specimen book.`,`#lorem` );
   //news.print();
   //console.log(news);

   
   //the third task

   

   arrNews = [];
  

   class News_line extends News{

    
    
    get countNews(){
       let count = 0;
      
      for(let news of arrNews){
         count++ ;
        
        
      }
      console.log(`There are ${count} pieces of news for now.`);
      return count;
      
    }

    displayAllNews() {

      for(let news of arrNews){
           news.print();
      }
        //news.print();
       // news1.print();
       // news2.print();
        //return news.print();
    }

    addFreshNews() {
      if(news){
         arrNews.push(news) && ++this.count;
      }
      if(news1){
         arrNews.push(news1) && ++this.count;
      }
      if(news2){
         arrNews.push(news2) &&++this.count;
      }
      
    }

    removeOldNews() {
      
      return arrNews.shift();
    }



   }

   let news_line = new News_line();
   
   news_line.addFreshNews();
   //news_line.addFreshNews();
   //news_line.addFreshNews();
   //news_line.addFreshNews();



   //news_line.removeOldNews();
  // news_line.removeOldNews();

   
   news_line.countNews;
  
  
   news_line.displayAllNews();
   console.log(arrNews);
   console.log(news1)
   console.log(typeof news);
   


   
   