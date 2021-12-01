$(document).ready(function(){
    /*         <----------- Variables ----------------->               */
    var texts , back , index , x, count , p, time , div             ;
    texts = [" Web Developer      "];
    back = false;
    index = 0;
    count = 0;
    time = 150;
    p = $('h2.write');
    div = $('div');
    /*         <----------- Variables ----------------->               */
  
    function write(){
      x = setInterval(function(){
        /*      <-   False      ->        */
        if( back ==false )
        {
          time=80;
  
          p.text( p.text() + texts[index][count] );
          count++;
          if( count == texts[index].length )
          {
            clearInterval(x);
            back = true;
            if( index==texts.length  -1 )
            {
              index = 0
            }
            else
            {
              index++
            }		                 
            write();
          };
  
        }
        /*      <-   False      ->        */
        /*      <-   [  True ]      ->        */
        else
        {
          time=150
  
          count--;
          p.text(    p.text().slice(0,count)        )
  
  
          if (count == 0 ) {
            clearInterval(x);
            back = false;
            write();
          }
  
        }
        /*      <-   [  True ]      ->        */
      },time);
  
    };
    write();
    /*    <!--------------   Middle   -------------->          */
    
  });
  /*     <!-------------   End   --------------->         */