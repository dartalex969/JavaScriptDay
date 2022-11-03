
  

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
      this.date = new Date(Date.parse(date));
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

   let news = new News(`What is Lorem Ipsum?`,'2022-10-30T15:30',`Lorem Ipsum is simply dummy text of the printing and
   typesetting industry. Lorem Ipsum has been the industry's standard dummy
   text ever since the 1500s, when an unknown printer took a galley of type
   and scrambled it to make a type specimen book.`,`#lorem #ipsum #text` );
   
  //news.print();
   //console.log(news);

   
   

   
//the third task
   
  

   class NewsLine{

    constructor(...someNews){
      this.someNews = someNews
    }

       
    get allNews(){
       return `There are ${this.someNews.length} pieces of news now.`
        
        
      }
      

    displayAllNews() {

      for(let news of this.someNews){
           news.print();
      }
        
    }

    addFreshNews(header, date, text, tags) {
      this.someNews.push(new News(header,date,text,tags))
      
    }

    removeOldNews() {
      
      this.someNews.shift();
    }

    sortByDate(){
      
      return this.someNews.sort((a,b) => b.date - a.date);
    }
    
    searchByTag(tag){
      return this.someNews.filter((someNews) => someNews.tags.includes(tag));
    }


   }

   let newsLine = new NewsLine();
       
   
    
   newsLine.addFreshNews(`What is Lorem Ipsum?`,'2022-10-30T15:30',`Lorem Ipsum is simply dummy text of the printing and
   typesetting industry. Lorem Ipsum has been the industry's standard dummy
   text ever since the 1500s, when an unknown printer took a galley of type
   and scrambled it to make a type specimen book.`,`#lorem`); 
   newsLine.addFreshNews(`Why do people use Lorem Ipsum?`,'2022-10-28T15:30',`Lorem Ipsum is simply dummy text of the printing and
   typesetting industry. Lorem Ipsum has been the industry's standard dummy
   text ever since the 1500s, when an unknown printer took a galley of type
   and scrambled it to make a type specimen book.`,` #ipsum ` );
   newsLine.addFreshNews(`When was Lorem Ipsum mentioned first?`,'2022-09-23T17:30',`Lorem Ipsum is simply dummy text of the printing and
   typesetting industry. Lorem Ipsum has been the industry's standard dummy
   text ever since the 1500s, when an unknown printer took a galley of type
   and scrambled it to make a type specimen book.`,`#text` );  

   newsLine.displayAllNews();
   console.log(newsLine);
   console.log(newsLine.allNews); 
   
   console.log(newsLine.sortByDate());
   console.log(newsLine.searchByTag('#ipsum'));
   
   
   
   