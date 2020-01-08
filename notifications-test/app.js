Notification.requestPermission();

function notify() {
  const options = {
    body: 'test'
  };
  const n = new Notification('TEST TITLE', options);
}

notify();