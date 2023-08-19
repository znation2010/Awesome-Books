class myNav {
  static navigationBar() {
    document.addEventListener('DOMContentLoaded', () => {
      // link features
      const list = document.querySelector('.book-list');
      const newbook = document.querySelector('.add_new-book');
      const contact = document.querySelector('.contact');
      const spanlist = document.querySelector('.list');
      const spanaddnew = document.querySelector('.add-new');
      const spancontact = document.querySelector('.contact-info');

      spanlist.addEventListener('click', () => {
        newbook.classList.remove('add_new-book');
        newbook.classList.add('non-display');
        spanaddnew.classList.remove('color');

        contact.classList.remove('contect');
        contact.classList.add('non-display');
        spancontact.classList.remove('color');

        list.classList.remove('non-display');
        list.classList.add('book-list');
        spanlist.classList.add('color');
      });

      spanaddnew.addEventListener('click', () => {
        contact.classList.remove('contect');
        contact.classList.add('non-display');
        spancontact.classList.remove('color');

        list.classList.remove('book-list');
        list.classList.add('non-display');
        spanlist.classList.remove('color');

        newbook.classList.remove('non-display');
        newbook.classList.add('add_new-book');
        spanaddnew.classList.add('color');
      });

      spancontact.addEventListener('click', () => {
        newbook.classList.replace('add_new-book', 'non-display');
        spanaddnew.classList.remove('color');

        list.classList.replace('book-list', 'non-display');
        spanlist.classList.remove('color');

        contact.classList.replace('non-display', 'contact');
        spancontact.classList.add('color');
      });
    });
  }
}

export default myNav;
