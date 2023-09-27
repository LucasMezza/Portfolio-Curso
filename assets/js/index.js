const POPUP      = document.querySelector('[data-popup]'),
      MENU       = document.querySelector('[data-hamburger]'),
      MENU_POPUP = document.querySelector('[data-hamburger-popup]');

// ============================================================================

document.querySelectorAll('.bg-video')
        .forEach(function(elm) {
          const follow = elm.querySelector('#cursor');

          elm.addEventListener('mousemove', function(e) {
            follow.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
            follow.style.display = "block";
          });
        })

// ==============================================

MENU.addEventListener('click', function() {
      MENU.classList.toggle('opened');
      MENU.setAttribute('aria-expanded', MENU.classList.contains('opened'));

      POPUP.classList.add('visible');

      MENU_POPUP.classList.toggle('opened');
      MENU_POPUP.setAttribute('aria-expanded', MENU.classList.contains('opened'));
    });

// ==============================================

document.body.addEventListener('click', function(evt) {
                const close = evt.target.closest('[data-close]');

                if(!close) {
                  if(!MENU.classList.contains('opened')) { 
                    video = document.querySelector('[data-video]');
                    video.classList.remove('visible');
                    return; 
                  }
                  return;
                }
                
                const popup = close.closest('[data-popup]');

                if(!popup) { return; }

                popup.classList.remove('visible');
                MENU.classList.toggle('opened');
                MENU_POPUP.classList.toggle('opened');
              });

