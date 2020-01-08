Notification.requestPermission();

function notify() {
  const options = {
    body: 'body test',
    icon: './box.png',
    image: './sort.jpg'
  }
  const n = new Notification('TEST TITLE', options);
}

notify();