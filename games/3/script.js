
  var p = true;

    function  f1(){
      p = true;
      document.getElementById('pole').innerHTML = '';
      var codes = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8],
        i, j, x, y;
      for(y = codes.length; y;){
        j = Math.floor(Math.random() * y);
        x = codes[--y];
        codes[y] = codes[j];
        codes[j] = x;
      }
      for(j = 0; j < 16; j++)
          document.getElementById('pole').innerHTML += '<a name="square" color="' + codes[j] + '" class="color' + codes[j] + ' hidden">&nbsp;</a>';
      var check = false,
        selcolor = 0,
        sela,
        open = 0,
        timer,
        a = document.getElementsByTagName('a');
      for(var i = 0; i < a.length; i++){
          a[i].addEventListener('click',
          function(e){
              var el = e.target;
              if(el.className.indexOf('hidden') > -1){
                  el.className = el.className.replace('hidden', '');
                  timerId = setTimeout(function(){
                      if(check){
                          check = false;
                          if(el.getAttribute('color') == selcolor){
                              open++;
                              if(open == 8){
                                p = false;
                                alert('You win! ' + document.getElementById('msms').textContent);



                              }

                          }
                          else{
                              sela.className += ' hidden';
                              el.className += ' hidden';
                          }
                      }
                      else{
                          selcolor = el.getAttribute('color');
                          sela = el;
                          check = true;
                      }
                  }, 100);
              }
          });
      }
      };

      function  f2(){
        var p = true;
        document.getElementById('pole').innerHTML = '';
        for(j = 0; j < 16; j++)
            document.getElementById('pole').innerHTML += '<a class="squarehidden">&nbsp;</a>';

        };

      f2();




        var startButton = document.getElementById('start'),
            clock = document.getElementById('clock'),
            body = document.getElementsByTagName('body')[0],
            startTime,
            requestId;

        var ms,S,M;

        startButton.addEventListener('click', start);

        function clockRun() {

                ms = Date.now() - startTime;
                S = Math.floor(ms / 1000);
                ms = ms % 1000;
                M = Math.floor(S / 60);
                S = S % 60;
            document.getElementById('msms').textContent = [showTime(M, 2), showTime(S, 2), showTime(ms, 3)].join(':');
            if (p == true){
                requestId = requestAnimationFrame(clockRun);

            }else{
              document.getElementById('msms').textContent = '00:00:000';
            }
        }

        function showTime(x, y) {
            var s = '00' + x;
            return s.slice(-y)
        }

        body.onclick = function (event) {
            var target = event.target;
        };

        body.addEventListener('click',showSavePoint);
        function showSavePoint(evt) {
            var target = evt.target;
        };
        var startButton = document.getElementById('start'),
            clock = document.getElementById('clock'),
            body = document.getElementsByTagName('body')[0],
            startTime,
            requestId;
        var ms,S,M;

        startButton.addEventListener('click', start);

        function start() {
            switch (this.textContent) {
                case 'Старт':
                    startTime = Date.now();
                    this.textContent = 'Старт';
                    clockRun();
                    f1();
                    break;

            }
        }



        function showTime(x, y) {
            var s = '00' + x;
            return s.slice(-y)
        }
