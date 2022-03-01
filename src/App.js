import React, { useEffect } from "react";
import $ from 'jquery'
import "./App.css";

const App = () => {
  useEffect(() => {
    $(document).on('click', '.min', function(){
      $(this).closest('.modal').find('.content').slideUp();
      $(this).closest('.modal').animate({'left':0,'bottom':0});
    });

    $(document).on('click', '.max', function(){
      $(this).closest('.modal').find('.content').slideDown();
      $(this).closest('.modal').animate({'left':'20px','bottom':'50%'});
    });

    $(document).on('click', '.close', function(){
      $(this).closest('.modal').fadeOut();
    });
  }, [])
  return (
    <div>
      <div class="shield">
        <div class="modal">
          <div class="header">
            <span>Modal Window</span>
            <span class="buttons">
              <span class="min">_</span>
              <span class="max">[ ]</span>
              <span class="close">X</span>
            </span>
          </div>
          <div class="content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            corrupti eum autem unde similique animi harum tempora, voluptatem
            ratione blanditiis dolores debitis modi. Reiciendis nihil debitis
            repellendus error necessitatibus impedit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
